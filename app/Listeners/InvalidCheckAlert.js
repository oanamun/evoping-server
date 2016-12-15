const Mail = use('Mail')
const AlertLog = use('App/Model/AlertLog')
const InvalidCheckAlert = exports = module.exports = {}

InvalidCheckAlert.sendCheckEmail = function *(check) {
  for (let alert_type_device of check.AlertTypeDevice) {

    //transformam created_at intr-un obiect Date si adaugam alert_interval la minute
    let alert_log = alert_type_device.AlertLog[0];
    let verify_interval = true;
    if (alert_log) {
      let alert_interval = new Date(alert_log.created_at);
      alert_interval.setMinutes(alert_interval.getMinutes() + alert_type_device.alert_interval);
      verify_interval = alert_interval.getTime() < Date.now()
    }

    //verificam daca a trecut destul de mult timp de la ultimul alert pentru a trimite urmatorul alert
    if (verify_interval) {
      if (alert_type_device.alert_type == 'email') {
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
}
