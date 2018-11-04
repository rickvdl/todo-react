import { combineReducers } from 'redux'
import application from './application'
import auth from './auth'
import tasks from './tasks'
import task from './task'
import editTask from './editTask'

import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  application,
  auth,
  tasks,
  task,
  editTask,
  form: formReducer,
})