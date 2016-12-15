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

      table.integer('project_id').unsigned()
      table.foreign('project_id').references('projects.id').onDelete('CASCADE')
    })
  }

  down () {
    this.drop('devices')
  }

}

module.exports = DevicesTableSchema
