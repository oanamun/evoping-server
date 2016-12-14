'use strict'

const Factory = use('Factory')
const User = use('App/Model/User')

class UserSeeder {
  *run() {
  }

  * go() {
    const users = yield User.all()
    for (let user of users) {
      yield user.delete();
    }

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
