'use strict'

const Database = use('Database')
const Check = use('App/Model/Check')
const Project = use('App/Model/Project')

class CheckSeeder {
  *run() {
  }
  * go() {
    yield Database.table('checks').delete()

    const project = yield Project.query().first()
    yield project
      .Check()
      .createMany([{
        name: 'Check valid',
        host: 'http://google.com',
        port: 80,
        type: 'web',
        special_info: {method: 'GET'},
        check_interval: 5,
        max_response_time: 60,
      }, {
        name: 'Check invalid',
        host: 'http://www.googlegooglegooglegooel.com',
        port: 80,
        type: 'web',
        special_info: {method: 'GET'},
        check_interval: 5,
        max_response_time: 60,
      }])
  }

}

module.exports = CheckSeeder
