'use strict'

const Schema = use('Schema')

class ChecksTableSchema extends Schema {

  up() {
    this.create('checks', (table) => {
      table.increments()
      table.string('name')
      table.string('host')
      table.integer('port').default(80)
      table.enu('type', ['web', 'mysql', 'websocket'])
      table.json('special_info')
      table.integer('check_interval').unsigned().default(300)
      table.integer('max_response_time').unsigned().default(60)
      table.timestamps()

      table.integer('project_id').unsigned()
      table.foreign('project_id').references('projects.id').onDelete('CASCADE')
    })
  }

  down() {
    this.drop('checks')
  }

}

module.exports = ChecksTableSchema
