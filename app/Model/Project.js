'use strict'

const Lucid = use('Lucid')

class Project extends Lucid {

  User() {
    return this.belongsToMany('App/Model/User')
  }

  Device() {
    return this.hasMany('App/Model/Device')
  }
}

module.exports = Project
