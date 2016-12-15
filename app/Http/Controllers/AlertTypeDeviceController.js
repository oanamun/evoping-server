'use strict'
const AlertTypeDevice = use('App/Model/AlertTypeDevice')

class AlertTypeDeviceController {

  * index(request, response) {
    let check_id = request.param('id')
    const alert_type_devices = yield AlertTypeDevice.query().where('check_id', check_id)
    response.json(alert_type_devices)
  }

  * store(request, response) {
    const alert_type_device = new AlertTypeDevice()
    alert_type_device.fill(request.all())
    yield alert_type_device.save()
    response.json(alert_type_device)
  }

  * update(request, response) {
    const alert_type_device = yield AlertTypeDevice.findOrFail(request.param('id'))
    alert_type_device.fill(request.all())
    yield alert_type_device.save()
    response.json(alert_type_device)
  }

  * destroy(request, response) {
    const alert_type_device = yield AlertTypeDevice.findOrFail(request.param('id'))
    yield alert_type_device.delete()
    response.json({'message': 'Alert Type Device deleted', data: alert_type_device})
  }

}

module.exports = AlertTypeDeviceController
