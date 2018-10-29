import * as web from 'express-decorators'
import HTTPErrors from 'http-errors'
import * as EmailValidator from 'email-validator'

@web.basePath('/user')
class UserController {

  @web.post('/')
  createUser(request, response) {
    const { name, email, password } = request.body

    if (!name || !email || !password) {
      throw HTTPErrors.BadRequest('Name, email or password missing')
    }

    if (name.length < 2) {
      throw HTTPErrors.BadRequest('Name must be 2 characters or more')
    }

    if (password.length < 8) {
      throw HTTPErrors.BadRequest('Password must be 8 characters or more')
    }

    if (!EmailValidator.validate(email)) {
      throw HTTPErrors.BadRequest('Email invalid')
    }

    if (request.userManager.getUserByEmail(email)) {
      throw HTTPErrors.BadRequest('A user with that email already exists')
    }

    request.userManager.addUser(name, email, password)
    response.send(201)
  }

}

export default UserController