import { combineReducers } from 'redux'
import application from './application'
import auth from './auth'
import tasks from './tasks'

import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  application,
  auth,
  tasks,
  form: formReducer,
})