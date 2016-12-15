'use strict'
const Device = use('App/Model/Device')

class DeviceController {

  * index(request, response) {
    let project_id = request.param('id')
    const devices = yield Device.query().where('project_id', project_id)
    response.json(devices)
  }

  * store(request, response) {
    const device = new Device()
    device.fill(request.all())
    yield device.save()
    response.json(device)
  }

  * update(request, response) {
    const device = yield Device.findBy('id',request.param('id'))
    device.fill(request.all())
    yield device.save()
    response.json(device)
  }

  * destroy(request, response) {
    const device = yield Device.findOrFail(request.param('id'))
    yield device.delete()
    response.json({'message': 'Device deleted', data:device})
  }

}

module.exports = DeviceController
