'use strict'

const Lucid = use('Lucid')

class AlertLog extends Lucid {

  static get updateTimestamp() {
    return null
  }

  AlertTypeDevice() {
    return this.belongsTo('App/Model/AlertTypeDevice')
  }
}

module.exports = AlertLog
