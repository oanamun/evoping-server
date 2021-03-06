'use strict'

const Database = use('Database')
const AlertTypeDevice = use('App/Model/AlertTypeDevice')
const AlertLog = use('App/Model/AlertLog')
const Hash = use('Hash')

class AlertLogSeeder {
  *run() {
  }
  * go() {
    yield Database.table('alert_logs').delete()

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
