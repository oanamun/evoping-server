'use strict'
const Project = use('App/Model/Project')
const User = use('App/Model/User')

class ProjectController {

  * index(request, response) {
    let user = yield request.auth.getUser()
    console.log(user)
    yield user.related('Project.Check').load()
    response.json(user)
  }

  * store(request, response) {
    let user = yield request.auth.getUser()
    const project = new Project()
    project.fill(request.all())
    yield user.Project().save(project)
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
