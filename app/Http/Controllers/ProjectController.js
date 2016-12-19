'use strict'
const Project = use('App/Model/Project')
const User = use('App/Model/User')
const Database = use('Database')

class ProjectController {

  * index(request, response) {
    let user = yield request.auth.getUser()
    const projects = yield user.Project().fetch()
    response.json(projects)
  }

  * store(request, response) {
    const project = new Project()
    project.fill(request.all())
    yield project.save()
    response.json(project)
  }

  * update(request, response) {
    const project = yield Project.findOrFail(request.param('id'))
    project.fill(request.all())
    yield project.save()
    response.json(project)
  }

  * destroy(request, response) {
    const project = yield Project.findOrFail(request.param('id'))
    yield project.delete()
    response.json({'message': 'Project deleted'})
  }

}

module.exports = ProjectController
