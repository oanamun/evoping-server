'use strict'
const socketioJwt = require('socketio-jwt');
const Env = use('Env');
const Redis = use('Redis');
const Check = use('App/Model/Check')
const AlertTypeDevice = use('App/Model/AlertTypeDevice')
const AlertLog = use('App/Model/AlertLog')
const Event = use('Event')
const User = use('App/Model/User')
const request = use('request')
const co = require('co');
let io;

const checks = co.wrap(function*() {
  return yield Check.query().with('AlertTypeDevice').fetch();
});

const add_check_to_redis = co.wrap(function*(check, data) {
  return yield Redis.lpush(check.project_id, JSON.stringify({check_id: check.id, data}))
});

const load_alert_log = co.wrap(function*(check) {
  for (let alert_type_device of check.relations.AlertTypeDevice.value()) {
    yield alert_type_device.related('AlertLog').scope('AlertLog', (builder) => {
      builder.orderBy('created_at', 'desc').limit(1)
    }).load()
  }
  return check;
});

function make_request(check) {
  request({
    method: check.special_info.method,
    uri: check.host,
    port: check.port,
    timeout: check.max_response_timeout * 1000,
    time: true,
    gzip: true
  }).on('response', function (res) {
    io.to(check.project_id).emit(check.id, res.request.elapsedTime);
    add_check_to_redis(check, {
      elapsedTime: res.request.elapsedTime,
      statusCode: res.statusCode
    })

    if (res && res.statusCode === 200) {
      console.log(`${check.name} ${res.request.elapsedTime} ms`);
    } else {
      console.log('not')
    }
  }).on('error', function (e) {
    //console.log(e)
    console.log(`${check.name} error`);
    io.to(check.project_id).emit(check.id, {error: true});
    add_check_to_redis(check, {error: true})
    load_alert_log(check).then(check_with_alert => {
      Event.fire('invalid.check', check_with_alert.toJSON())
    })
  });
  console.log(process.memoryUsage());
}

function run_check(check) {
  //do work
  //console.log(check)
  make_request(check);

  //queue more work
  setTimeout(function () {
    run_check(check);
  }, check.check_interval * 1000)
}

module.exports = function (server) {

  io = use('socket.io')(server)
  checks().then((checks) => {
    for (let check of checks) {
      run_check(check)
    }
  })

  io.on('connection', socketioJwt.authorize({
    secret: Env.get('APP_KEY'),
    timeout: 10000 // 10 seconds to send the authentication message
  })).on('authenticated', function (socket) {
    //this socket is authenticated, we are good to handle more events from it.
    const user_id = socket.decoded_token.payload;
    console.log('user ' + user_id + ' connected')
    socket.on('join', function (check_id) {
      socket.join(check_id);
    });
    socket.on('disconnect', function () {
      socket.disconnect();
    });
  })
}
