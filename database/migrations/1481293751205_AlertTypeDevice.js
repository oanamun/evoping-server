'use strict'

const Schema = use('Schema')

class AlertTypeDevicesTableSchema extends Schema {

  up() {
    this.create('alert_type_devices', (table) => {
      table.increments()
      table.json('alert_info')
      table.integer('alert_interval').unsigned().default(60)
      table.enum('alert_type', ['email', 'sms', 'slack']).default('email')
      table.timestamps()

      table.integer('check_id').unsigned()
      table.foreign('check_id').references('checks.id').onDelete('CASCADE')
    })
  }

  down() {
    this.drop('alert_type_devices')
  }

}

module.exports = AlertTypeDevicesTableSchema
