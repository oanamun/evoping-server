'use strict'
const AlertLog = use('App/Model/AlertLog')

class AlertLogController {

  * index(request, response) {
    let alert_type_device_id = request.param('id')
    const alert_logs = yield AlertLog.query().where('alert_type_device_id', alert_type_device_id).orderBy('created_at', 'desc').paginate(request.input('page', 1))
    response.json(alert_logs)
  }

}

module.exports = AlertLogController
