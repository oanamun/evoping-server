'use strict'

const Schema = use('Schema')

class ChecksTableSchema extends Schema {

  up() {
    this.create('checks', (table) => {
      table.increments()
      table.string('name')
      table.enu('type', ['web', 'mysql', 'websocket'])
      table.json('special_info')
      table.enu('method', ['GET', 'POST', 'PUT', 'DELETE'])
      table.integer('check_interval').unsigned().default(300)
      table.timestamps()

      table.integer('device_id').unsigned()
      table.foreign('device_id').references('devices.id')
    })
  }

  down() {
    this.drop('checks')
  }

}

module.exports = ChecksTableSchema
