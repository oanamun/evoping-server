'use strict'

const Lucid = use('Lucid')

class Check extends Lucid {

  getSpecialInfo(special_info) {
    return JSON.parse(special_info)
  }

  setSpecialInfo(special_info) {
    return JSON.stringify(special_info)
  }

  Project() {
    return this.belongsTo('App/Model/Project')
  }

  AlertTypeDevice() {
    return this.hasMany('App/Model/AlertTypeDevice')
  }
}

module.exports = Check
