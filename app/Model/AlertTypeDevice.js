'use strict'

const Lucid = use('Lucid')

class AlertTypeDevice extends Lucid {

  Check() {
    return this.belongsTo('App/Model/Check')
  }

  AlertLog() {
    return this.hasMany('App/Model/AlertLog')
  }
}

module.exports = AlertTypeDevice
