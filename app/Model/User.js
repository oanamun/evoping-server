'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  //automatically hash password on user save
  static boot() {
    super.boot()
    this.addHook('beforeCreate', 'User.encryptPassword')
  }
}

module.exports = User
