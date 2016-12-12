'use strict'

const Schema = use('Schema')

class ProjectsTableSchema extends Schema {

  up () {
    this.create('projects', (table) => {
      table.increments()
      table.string('name', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }

}

module.exports = ProjectsTableSchema
