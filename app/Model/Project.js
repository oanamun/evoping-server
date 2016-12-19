'use strict'

const Lucid = use('Lucid')

class Project extends Lucid {

  User() {
    return this.belongsToMany('App/Model/User')
  }

  Check() {
    return this.hasMany('App/Model/Check')
  }
}

module.exports = Project
