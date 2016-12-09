'use strict'

const Schema = use('Schema')

class DeviceUsersTableSchema extends Schema {

  up() {
    this.create('device_users', (table) => {
      table.integer('user_id').unsigned()
      table.integer('device_id').unsigned()
      table.primary(['user_id', 'device_id'])

      table.foreign('user_id').references('users.id')
      table.foreign('device_id').references('devices.id')
    })
  }

  down() {
    this.drop('device_users')
  }

}

module.exports = DeviceUsersTableSchema
