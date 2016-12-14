'use strict'
const socketioJwt = require('socketio-jwt');
const Env = use('Env');
const Redis = use('Redis');
const Check = use('App/Model/Check')
const co = require('co');
//const Request = use('Adonis/Src/Request')
const request = use('request')

const checks = co.wrap(function*() {
  return yield Check.all();
});

const add_check_to_redis = co.wrap(function*(check_id, data) {
  return yield Redis.lpush(check_id, data)
});

module.exports = function (server) {

  const io = use('socket.io')(server)
  checks().then((checks) => {
    for (let check of checks) {
      setInterval(function () {
        request({
          method: JSON.parse(check.special_info).method,
          uri: check.host,
          timeout: check.max_response_timeout * 1000,
          time: true,
          gzip: true
        }).on('response', function (res) {
          io.to(check.id).emit('check', res.request.elapsedTime);
          add_check_to_redis(check.id, JSON.stringify({
            elapsedTime: res.request.elapsedTime,
            statusCode: res.statusCode
          }))

          if (res && res.statusCode === 200) {
            console.log(res.request.elapsedTime + "ms");
          } else {
            console.log('not')
          }
        }).on('error', function (e) {
          //console.log(e)
          console.log('error')
          io.to(check.id).emit({error: true});
          add_check_to_redis(check.id, JSON.stringify({error: true}))
        });
      }, check.check_interval * 1000)
    }
  })


  io.on('connection', socketioJwt.authorize({
    secret: Env.get('APP_KEY'),
    timeout: 10000 // 10 seconds to send the authentication message
  })).on('authenticated', function (socket) {
    //this socket is authenticated, we are good to handle more events from it.
    const user_id = socket.decoded_token.payload;
    console.log('user ' + user_id + ' connected')
    socket.on('join', function (room) {
      socket.join(room);
    });
    socket.on('disconnect', function () {
      //clearInterval(refresh_point);
      socket.disconnect();
    });
  })
}
