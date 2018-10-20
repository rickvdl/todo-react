import { combineReducers } from 'redux'
import application from './application'
import auth from './auth'

// import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  application,
  auth,
  // form: formReducer,
})