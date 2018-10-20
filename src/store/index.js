import { createStore, compose, applyMiddleware } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import reducers from '../reducers'
import { api, apiMiddlewareOptions } from '../api'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = composeEnhancers(applyMiddleware(axiosMiddleware(api, apiMiddlewareOptions)))

export default createStore(reducers, middleware)