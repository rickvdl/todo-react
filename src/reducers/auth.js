import { LOGIN, LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions'

const initialState = {
  token: null,
  user: null
}

export default (state = initialState, action: Object) => {
  switch (action.type) {
  case LOGIN: 
    return {...state}
  case LOGIN_LOADING:
    return {...state, loading: true}
  case LOGIN_SUCCESS:
    return {...state, loading: false, token: action.payload.token}
  case LOGIN_FAIL:
    return {...state, loading: false, error: action.payload.error}
  default:
    return state
  }
}