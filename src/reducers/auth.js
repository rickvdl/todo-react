import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL } from '../actions'

const initialState = {
  token: null,
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
  case LOGOUT_FAIL:
    return {...state, token: null}
  default:
    return state
  }
}