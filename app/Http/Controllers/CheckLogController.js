'use strict'
const Redis = use('Redis')
const Project = use('App/Model/Project')

class CheckLogController {

  * index(request, response) {
  }

  * last_check(request, response) {
    const last_check = yield Redis.lindex(request.param('id'), 0)
    response.json(last_check)
  }
}

module.exports = CheckLogController
