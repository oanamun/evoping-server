'use strict'

const Factory = use('Factory')
const Check = use('App/Model/Check')
const Device = use('App/Model/Device')

class CheckSeeder {
  *run() {
  }
  * go() {
    const checks = yield Check.all()
    for (let check of checks) {
      yield check.delete();
    }

    const device = yield Device.query().first()
    yield device
      .Check()
      .createMany([{
        name: 'Check valid',
        host: 'http://google.com',
        port: 80,
        type: 'web',
        special_info: {method: 'GET'},
        check_interval: 5,
        max_response_time: 60,
      }, {
        name: 'Check invalid',
        host: 'http://www.googlegooglegooglegooel.com',
        port: 80,
        type: 'web',
        special_info: {method: 'GET'},
        check_interval: 5,
        max_response_time: 60,
      }])
  }

}

module.exports = CheckSeeder
