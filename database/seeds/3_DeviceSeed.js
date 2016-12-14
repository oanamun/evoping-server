'use strict'

const Factory = use('Factory')
const Device = use('App/Model/Device')
const Project = use('App/Model/Project')

class DeviceSeeder {
  *run() {
  }
  * go() {
    const devices = yield Device.all()
    for (let device of devices) {
      yield device.delete();
    }
    const project = yield Project.query().first()
    yield project
      .Device()
      .createMany([{
        name: 'Device 1',
        description: 'Description description description 1',
        public: true,
      }, {
        name: 'Device 2',
        description: 'Description description description 2',
        public: true,
      }, {
        name: 'Device 3',
        description: 'Description description description 3',
        public: false,
      }])
  }

}

module.exports = DeviceSeeder
