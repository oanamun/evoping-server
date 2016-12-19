'use strict'

const User = use('App/Model/User')
const Database = use('Database')

class UserSeeder {
  *run() {
  }

  * go() {
    yield Database.table('users').delete()

    yield User.create({
      email: 'user1@example.com',
      password: '123456',
    })

    yield User.create({
      email: 'user2@example.com',
      password: '123456'
      //do_not_disturbe: new Date().valueOf()
    })

    yield User.create({
      email: 'user3@example.com',
      password: '123456',
    })

  }

}

module.exports = UserSeeder
