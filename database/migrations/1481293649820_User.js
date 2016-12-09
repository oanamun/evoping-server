'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('email').unique()
      table.string('password', 60)
      table.timestamp('do_not_disturb')
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
