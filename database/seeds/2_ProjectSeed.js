'use strict'

const Factory = use('Factory')
const Project = use('App/Model/Project')
const User = use('App/Model/User')

class ProjectSeeder {
  *run() {
  }

  * go() {
    const projects = yield Project.all()
    for (let project of projects) {
      yield project.delete();
    }
    const user = yield User.query().first();

    yield user.Project().createMany([
      { name: 'Project 1' },
      { name: 'Project 2' },
      { name: 'Project 3' }
    ])
  }

}

module.exports = ProjectSeeder
