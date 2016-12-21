'use strict'
const Check = use('App/Model/Check')
const run_check = use('App/Http/socket').run_check;

class CheckController {

  * index(request, response) {
    let project_id = request.param('id')
    const checks = yield Check.query().where('project_id', project_id).fetch()
    response.json(checks)
  }

  * store(request, response) {
    const check = new Check()
    check.fill(request.all())
    yield check.save()
    run_check(check);
    response.json(check)
  }

  * update(request, response) {
    const check = yield Check.findOrFail(request.param('id'))
    check.fill(request.all())
    yield check.save()
    run_check(check);
    response.json(check)
  }

  * destroy(request, response) {
    const check = yield Check.findOrFail(request.param('id'))
    yield check.delete()
    response.json({'message': 'Check deleted', data: check})
  }

}

module.exports = CheckController
