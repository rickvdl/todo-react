import api from '../api'

export const LOGIN = 'LOGIN'
export const LOGIN_LOADING = 'LOGIN_LOADING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const login = (email, password) => {
  return dispatch => {
    dispatch(loginStarted())

    return api.post('/token', {email, password}).then(response => {
      dispatch(loginSuccess(response.data.token))
    }).catch(error => {
      dispatch(loginFail(error.response.data.error.message))
    })
  }
}

export const loginStarted = () => {
  return {
    type: LOGIN_LOADING
  }
}

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      token
    }
  }
}

export const loginFail = (error) => {
  return {
    type: LOGIN_FAIL,
    payload: {
      error
    }
  }
}