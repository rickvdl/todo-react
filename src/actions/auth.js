export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const LOGOUT = 'LOGOUT'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'

export const REMOVE_TOKEN = 'REMOVE_TOKEN'

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