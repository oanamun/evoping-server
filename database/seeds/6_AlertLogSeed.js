'use strict'

const Factory = use('Factory')
const AlertTypeDevice = use('App/Model/AlertTypeDevice')
const AlertLog = use('App/Model/AlertLog')
const Hash = use('Hash')

class AlertLogSeeder {
  *run() {
  }
  * go() {
    const alertLogs = yield AlertLog.all()
    for (let alertLog of alertLogs) {
      yield alertLog.delete()
    }

    const alertTypeDevice = yield AlertTypeDevice.query().first()

    const id = alertTypeDevice.attributes.id;
    yield AlertLog.create({
      alert_type_device_id: id,
    });

    yield AlertLog.create({
      alert_type_device_id: id,
    });

    yield AlertLog.create({
      alert_type_device_id: id,
    });
  }
}

module.exports = AlertLogSeeder
