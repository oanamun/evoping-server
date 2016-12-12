'use strict'

const Schema = use('Schema')

class AlertLogsTableSchema extends Schema {

  up() {
    this.create('alert_logs', (table) => {
      table.increments()
      table.integer('alert_type_device_id').unsigned()
      table.timestamp('created_at')

      table.foreign('alert_type_device_id').references('alert_type_devices.id').onDelete('CASCADE')
    })
  }

  down() {
    this.drop('alert_logs')
  }

}

module.exports = AlertLogsTableSchema
