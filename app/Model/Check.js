'use strict'

const Lucid = use('Lucid')

class Check extends Lucid {

  Device() {
    return this.belongsTo('App/Model/Device')
  }

  AlertTypeDevice() {
    return this.hasMany('App/Model/AlertTypeDevice')
  }
}

module.exports = Check
