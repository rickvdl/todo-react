import { 
  EDIT_TASK,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAIL,
  EDIT_TASK_CLEANUP,
 } from '../actions'

const initialState = {
  loading: false,
  error: null,
}

export default (state = initialState, action: Object) => {
  switch (action.type) {
  case EDIT_TASK: 
    return {...state, ...initialState, loading: true}
  case EDIT_TASK_SUCCESS:
  return {...state, ...initialState, success: true}
  case EDIT_TASK_FAIL:
    return {...state, ...initialState, error: action.error.data}
  case EDIT_TASK_CLEANUP: 
    return {...state, ...initialState}
  default:
    return {...state}
  }
}