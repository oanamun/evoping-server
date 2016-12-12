'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  //automatically hash password on user save
  static boot() {
    super.boot()
    this.addHook('beforeCreate', 'User.encryptPassword')
  }

  //hide password field from JSON output
  static get hidden() {
    return ['password']
  }

  Project() {
    return this.belongsToMany('App/Model/Project')
  }
}

module.exports = User
