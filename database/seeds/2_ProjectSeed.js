'use strict'

const Database = use('Database')
const Project = use('App/Model/Project')
const User = use('App/Model/User')

class ProjectSeeder {
  *run() {
  }

  * go() {
    yield Database.table('projects').delete()

    const user = yield User.query().first();

    yield user.Project().createMany([
      {name: 'Project 1'},
      {name: 'Project 2'},
      {name: 'Project 3'}
    ])
  }

}

module.exports = ProjectSeeder
