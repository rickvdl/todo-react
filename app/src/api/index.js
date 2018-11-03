import axios from 'axios'
import { REMOVE_TOKEN } from '../actions'

const baseURL = 'http://127.0.0.1:3001'

export const api = axios.create({
  baseURL,
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
            return Promise.reject({message: `No response, is the API running on ${baseURL}?`})
          }

          if (error.response.status === 401) {
            dispatch({type: REMOVE_TOKEN})
          }

          let message = error.message
          if (error.response.data.error.message) {
            message = error.response.data.error.message
          }
          const newError = {...error, data: message}

          return Promise.reject(newError)
        }
      }
    ]
  }
}