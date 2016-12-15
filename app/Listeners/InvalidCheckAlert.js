const Mail = use('Mail')
const AlertLog = use('App/Model/AlertLog')
const InvalidCheckAlert = exports = module.exports = {}

InvalidCheckAlert.sendCheckEmail = function *(check) {
  for (let alert_type_device of check.AlertTypeDevice) {
    if (alert_type_device.alert_info.email) {
      yield Mail.send('emails.checkAlert', {alert_type_device: alert_type_device, check: check}, (message) => {
        message.to(alert_type_device.alert_info.email, alert_type_device.alert_info.name)
        message.from('admin@evoping.com')
        message.priority('high')
        message.subject(`Problem with ${check.name}`)
      })
      yield AlertLog.create({alert_type_device_id: alert_type_device.id})
    }
  }
}
