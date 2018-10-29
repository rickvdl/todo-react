import * as web from 'express-decorators'
import HTTPErrors from 'http-errors'

@web.basePath('/token')
class TokenController {

  @web.post('/')
  postToken(request, response) {
    const { email, password } = request.body

    if (!email || !password) {
      throw HTTPErrors.BadRequest('No email and or password supplied')
    }

    try {
      const token = request.userManager.login(email, password)
      response.send({token})
    }
    catch (error) {
      throw HTTPErrors.Unauthorized('Invalid email or password')
    }
  }

  @web.del('/')
  deleteToken(request, response) {
    request.userManager.deleteToken(request.user.id)
    response.send(202)
  }
}

export default TokenController