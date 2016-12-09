'use strict'

const Schema = use('Schema')

class DevicesTableSchema extends Schema {

  up () {
    this.create('devices', (table) => {
      table.increments()
      table.string('name')
      table.text('description')
      table.boolean('public').default(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('devices')
  }

}

module.exports = DevicesTableSchema
