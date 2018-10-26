import axios from 'axios'
import { REMOVE_TOKEN } from '../actions'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3001',
  responseType: 'json',
  requestType: 'json'
})

export const apiMiddlewareOptions = {
  interceptors: {
      request: [
          ({ getState, dispatch }, config) => {
            
            const token = getState().auth.token
            if (token) {
              config.headers['Authorization'] = `Bearer ${token}`
            }

            return config
          }
      ],
      response: [
      {
        success: ({ dispatch }, response) => {
          return response
        },
        error: ({ dispatch }, error) => {
          if (error.response === undefined) {
            return Promise.reject(error)
          }

          if (error.response.status === 401) {
            dispatch({type: REMOVE_TOKEN})
          }

          let message = error.message
          if (error.response.data.error.message) {
            message = error.response.data.error.message
          }
          const newError = {...error, message}

          return Promise.reject(newError)
        }
      }
    ]
  }
}