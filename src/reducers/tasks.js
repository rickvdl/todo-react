import { GET_TASKS, GET_TASKS_SUCCESS, GET_TASKS_FAIL } from '../actions'

const initialState = {
  tasks: [],
  loading: false,
  error: null,
}

export default (state = initialState, action: Object) => {
  switch (action.type) {
  case GET_TASKS: 
    return {...state}
  case GET_TASKS_SUCCESS:
    return {...state, tasks: action.payload.data}
  case GET_TASKS_FAIL:
    return {...state, error: action.error}
  default:
    return {...state}
  }
}