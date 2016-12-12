'use strict'

const Lucid = use('Lucid')

class Device extends Lucid {

  Project() {
    return this.belongsTo('App/Model/Project')
  }

  Check() {
    return this.hasMany('App/Model/Check')
  }
}

module.exports = Device
