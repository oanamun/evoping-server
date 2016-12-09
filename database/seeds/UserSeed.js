'use strict'

//const Factory = use('Factory')
const User = use('App/Model/User')

class UserSeeder {

  * run () {
    yield Factory.model(User).reset()

    yield User.create({
      name: 'User1',
      password: 123456,
      
    })

  }

}

module.exports = UserSeeder
