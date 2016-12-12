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
      table.integer('max_response_time').unsigned().default(60)
      table.timestamps()

      table.integer('device_id').unsigned()
      table.foreign('device_id').references('devices.id').onDelete('CASCADE')
    })
  }

  down() {
    this.drop('checks')
  }

}

module.exports = ChecksTableSchema
