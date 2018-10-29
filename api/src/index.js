import express from 'express'
import * as web from 'express-decorators';
import bodyParser from 'body-parser'
import HTTPErrors, { HttpError, } from 'http-errors'
import HTTPErrorsExpress from 'http-errors-express'
import bearerToken from 'express-bearer-token'
import tokenMiddleware from './middlewares/tokenMiddleware'
import DataManager from './DataManager'
import dataManagerMiddleware from './middlewares/dataManagerMiddleware'
import config from './config'
import TokenController from './controllers/TokenController'
import UserController from './controllers/UserController'
import TaskController from './controllers/TaskController'
import cors from 'cors'

if (!global._babelPolyfill) {
	require('babel-polyfill');
}

const app = express()

app.use(cors())

const dataManager = new DataManager()
app.use(dataManagerMiddleware(dataManager))

app.use(bearerToken())

app.use(tokenMiddleware())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

web.register(app, new TokenController())
web.register(app, new UserController())
web.register(app, new TaskController())

app.use((request, response) => {
  response.status(404).send({
    error: {
      name: "NotFoundError",
      message: "NotFound"
    }
  })
})

app.use((error, request, response, next) => {
  if (!(error instanceof HttpError)) {
    next(new HTTPErrors.InternalServerError(error))
  }
  next(error)
})

app.use(HTTPErrorsExpress())

app.listen(config.get('http.port'), () => console.log(`App running on port ${config.get('http.port')}`))