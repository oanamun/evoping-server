'use strict'

const Lucid = use('Lucid')

class AlertTypeDevice extends Lucid {

  getAlertInfo(alert_info) {
    return JSON.parse(alert_info)
  }
  setAlertInfo(alert_info) {
    return JSON.stringify(alert_info)
  }

  Check() {
    return this.belongsTo('App/Model/Check')
  }

  AlertLog() {
    return this.hasMany('App/Model/AlertLog')
  }
}

module.exports = AlertTypeDevice
