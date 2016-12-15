'use strict'
const Check = use('App/Model/Check')

class CheckController {

  * index(request, response) {
    let device_id = request.param('id')
    const checks = yield Check.query().where('device_id', device_id)
    response.json(checks)
  }

  * store(request, response) {
    const check = new Check()
    check.fill(request.all())
    yield check.save()
    response.json(check)
  }

  * update(request, response) {
    const check = yield Check.findBy('id',request.param('id'))
    check.fill(request.all())
    yield check.save()
    response.json(check)
  }

  * destroy(request, response) {
    const check = yield Check.findOrFail(request.param('id'))
    yield check.delete()
    response.json({'message': 'Check deleted', data:check})
  }

}

module.exports = CheckController
