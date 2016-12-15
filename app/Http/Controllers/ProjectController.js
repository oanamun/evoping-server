'use strict'
const Project = use('App/Model/Project')

class ProjectController {

  * index(request, response) {
    const projects = yield Project.all();
    response.json(projects)
  }

  * store(request, response) {
    const project = new Project()
    project.fill(request.all())
    yield project.save()
    response.json(project)
  }

  * update(request, response) {
    const project = yield Project.findBy('id',request.param('id'))
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
