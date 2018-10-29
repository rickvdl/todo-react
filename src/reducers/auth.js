import { SET_TOKEN, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, REMOVE_TOKEN } from '../actions'

const initialState = {
  token: null,
  loading: false,
  error: null,
}

export default (state = initialState, action: Object) => {
  switch (action.type) {
  case SET_TOKEN:
    return {...state, token: action.payload.token}
  case LOGIN: 
    return {...state}
  case LOGIN_SUCCESS:
    const { token } = action.payload.data
    setToken(token)
    return {...state, token, error: null}
  case LOGIN_FAIL:
    removeToken()
    return {...state, error: action.error.message}
  case LOGOUT_SUCCESS:
  case REMOVE_TOKEN:
  case LOGOUT_FAIL:
    removeToken()
    return {...state, token: null}
  default:
    return state
  }
}

const setToken = (token) => {
  localStorage.setItem('token', token)
}

const removeToken = () => {
  setToken(null)
}