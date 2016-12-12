'use strict'
const User = use('App/Model/User')

class AuthController {

  * login(request, response) {
    const email = request.input('email')
    const password = request.input('password')
    try {
      const token = yield request.auth.attempt(email, password)
      if (token) {
        const user = yield User.findByOrFail('email', email)
        user.token = token;
        response.json(user)
        return
      }
    } catch (e) {
      response.unauthorized({error: e.message})
      return
    }

    response.unauthorized('Invalid credentails')
  }

  * signup(request, response) {
    //
  }

}

module.exports = AuthController
