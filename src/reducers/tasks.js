import { GET_TASKS, GET_TASKS_SUCCESS, GET_TASKS_FAIL, COMPLETE_TASK_SUCCESS, UNCOMPLETE_TASK_SUCCESS } from '../actions'

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
  case COMPLETE_TASK_SUCCESS:
  case UNCOMPLETE_TASK_SUCCESS:
    const taskId = action.payload.data.id
    const completed = action.type === COMPLETE_TASK_SUCCESS
    return {...state, tasks: state.tasks.map(task => task.id == taskId ? {...task, completed} : task)}
  default:
    return {...state}
  }
}