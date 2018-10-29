import HTTPErrors from 'http-errors'

export default () => (request, response, next) => {
  if ((request.url === '/token' || request.url === '/user') && request.method === 'POST') {
    next()
    return
  }

  if (!request.token) {
    next(HTTPErrors.Unauthorized('No token supplied'))
    return
  }

  const user = request.userManager.getUserByToken(request.token)
  if (!user) {
    next(HTTPErrors.Unauthorized('Token invalid'))
    return
  }

  request.user = user

  next()
}