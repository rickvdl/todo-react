export const REGISTER = 'REGISTER'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const LOGOUT = 'LOGOUT'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'

export const REMOVE_TOKEN = 'REMOVE_TOKEN'

export const SET_TOKEN = 'SET_TOKEN'

export const CLEAN_AUTH_STATE = 'CLEAN_AUTH_STATE'

export const login = (email, password) => {
  return {
    type: LOGIN,
    payload: {
      request: {
        url: '/token',
        method: 'post',
        data: {
          email,
          password
        }
      }
    }
  }
}

export const logout = () => {
  return {
    type: LOGOUT,
    payload: {
      request: {
        url: '/token',
        method: 'delete',
      }
    }
  }
}

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    payload: {
      token
    }
  }
}

export const register = (name, email, password) => {
  return {
    type: REGISTER,
    payload: {
      request: {
        url: '/user',
        method: 'post',
        data: {
          name,
          email,
          password
        }
      }
    }
  }
}

export const cleanAuthState = () => {
  return {
    type: CLEAN_AUTH_STATE
  }
}