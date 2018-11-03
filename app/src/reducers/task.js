import { 
  NEW_TASK,
  NEW_TASK_SUCCESS,
  NEW_TASK_FAIL,
  CLEANUP_TASK
 } from '../actions'

const initialState = {
  loading: false,
  error: null,
  id: null
}

export default (state = initialState, action: Object) => {
  switch (action.type) {
  case NEW_TASK: 
    return {...state, ...initialState}
  case NEW_TASK_SUCCESS:
  return {...state, ...initialState, id: action.payload.data.id}
  case NEW_TASK_FAIL:
    return {...state, ...initialState, error: action.error.data}
  case CLEANUP_TASK: 
    return {...state, ...initialState}
  default:
    return {...state}
  }
}