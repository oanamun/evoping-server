'use strict'

const Schema = use('Schema')

class ProjectUserTableSchema extends Schema {

  up () {
    this.create('project_user', (table) => {
      table.integer('user_id').unsigned()
      table.integer('project_id').unsigned()
      table.primary(['user_id', 'project_id'])

      table.foreign('user_id').references('users.id').onDelete('CASCADE')
      table.foreign('project_id').references('projects.id').onDelete('CASCADE')
    })
  }

  down () {
    this.drop('project_user')
  }

}

module.exports = ProjectUserTableSchema
