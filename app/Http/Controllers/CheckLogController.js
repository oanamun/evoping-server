'use strict'
const Redis = use('Redis')
const Project = use('App/Model/Project')

class CheckLogController {

  * index(request, response) {
    //const page = request.input('page', 0)
    let check_log = yield Redis.lrange(request.param('id'), 0, 100)
    let check_json = []
    for(let check of check_log){
      check_json.push(JSON.parse(check))
    }
    response.json(check_json)
  }

  * last_check(request, response) {
    const project = yield Project.findOrFail(request.param('id'))
    yield project.related('Check').load()
    let last_checks = [];
    for(let check of project.toJSON().Check){
      last_checks.push(JSON.parse(yield Redis.lindex(check.id, 0)))
    }
    response.json(last_checks)
  }
}

module.exports = CheckLogController
