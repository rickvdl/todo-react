import { 
  SET_TOKEN, 
  LOGIN, 
  LOGIN_SUCCESS, 
  LOGIN_FAIL, 
  LOGOUT_SUCCESS, 
  LOGOUT_FAIL, 
  REMOVE_TOKEN,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAN_AUTH_STATE
} from '../actions'

const initialState = {
  token: null,
  loading: false,
  error: null,
  success: false
}

const defaultRequestState = {
  error: null,
  success: false
}

export default (state = initialState, action: Object) => {
  switch (action.type) {
  case SET_TOKEN:
    return {...state, token: action.payload.token, ...defaultRequestState}
  case LOGIN: 
    return {...state}
  case LOGIN_SUCCESS:
    const { token } = action.payload.data
    setToken(token)
    return {...state, token, ...defaultRequestState}
  case LOGIN_FAIL:
    removeToken()
    return {...state, ...defaultRequestState, error: action.error.data}
  case LOGOUT_SUCCESS:
  case REMOVE_TOKEN:
  case LOGOUT_FAIL:
    removeToken()
    return {...state, token: null}
  case REGISTER_SUCCESS:
    return {...state, ...defaultRequestState, success: true}
  case REGISTER_FAIL:
  return {...state, ...defaultRequestState, error: action.error.data}
  case CLEAN_AUTH_STATE:
    return {...state, ...defaultRequestState}
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