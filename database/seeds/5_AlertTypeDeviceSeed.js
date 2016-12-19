'use strict'

const Database = use('Database')
const Check = use('App/Model/Check')
const AlertTypeDevice = use('App/Model/AlertTypeDevice')

class AlertTypeDeviceSeeder {
  *run() {
  }

  * go() {
    yield Database.table('alert_type_devices').delete()

    const checks = yield Check.all()
    for (let check of checks) {
      yield check
        .AlertTypeDevice()
        .createMany([{
          alert_info: {'email': 'test1@example.com', 'name': 'Test1'},
          alert_interval: 20,
          alert_type: 'email'
        }, {
          alert_info: {'email': 'test2@example.com', 'name': 'Test2'},
          alert_interval: 34,
          alert_type: 'email'
        }, {
          alert_info: {'email': 'test3@example.com', 'name': 'Test3'},
          alert_type: 'sms'
        }])
    }
  }

}

module.exports = AlertTypeDeviceSeeder
