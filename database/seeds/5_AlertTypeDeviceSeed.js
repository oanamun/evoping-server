'use strict'

const Factory = use('Factory')
const Check = use('App/Model/Check')
const AlertTypeDevice = use('App/Model/AlertTypeDevice')

class AlertTypeDeviceSeeder {
  *run() {
  }
  * go () {
    const alertTypeDevices = yield AlertTypeDevice.all()
    for (let alertTypeDevice of alertTypeDevices) {
      yield alertTypeDevice.delete();
    }

    const check = yield Check.query().first()
    yield check
      .AlertTypeDevice()
      .createMany([{
        alert_info: 'AlertTypeDevice valid 1',
        alert_interval: 20,
      }, {
        alert_info: 'AlertTypeDevice valid 2',
        alert_interval: 34,
      }, {
        alert_info: 'AlertTypeDevice valid 3',
      }])
  }

}

module.exports = AlertTypeDeviceSeeder
