import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, REMOVE_TOKEN } from '../actions'

const initialState = {
  token: 'a',
  loading: false,
  error: null,
}

export default (state = initialState, action: Object) => {
  switch (action.type) {
  case LOGIN: 
    return {...state}
  case LOGIN_SUCCESS:
    return {...state, token: action.payload.data.token}
  case LOGIN_FAIL:
    return {...state, error: action.error.message}
  case LOGOUT_SUCCESS:
  case REMOVE_TOKEN:
  case LOGOUT_FAIL:
    return {...state, token: null}
  default:
    return state
  }
}