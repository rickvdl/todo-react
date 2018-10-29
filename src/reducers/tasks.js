import { 
  GET_TASKS, 
  GET_TASKS_SUCCESS,
  GET_TASKS_FAIL, 
  COMPLETE_TASK_SUCCESS, 
  COMPLETE_TASK_FAIL,
  UNCOMPLETE_TASK_SUCCESS,
  UNCOMPLETE_TASK_FAIL,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAIL
 } from '../actions'

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
    return {...state, tasks: sortTasks(action.payload.data)}
  case GET_TASKS_FAIL:
    return {...state, error: action.error}
  case COMPLETE_TASK_SUCCESS:
  case UNCOMPLETE_TASK_SUCCESS:
    const completedTaskId = action.payload.data.id
    const completed = action.type === COMPLETE_TASK_SUCCESS
    return {...state, tasks: state.tasks.map(task => task.id == completedTaskId ? {...task, completed} : task)}
  case COMPLETE_TASK_FAIL:
  case UNCOMPLETE_TASK_FAIL:
  case DELETE_TASK_FAIL:
    return {...state, error: action.error.message}
  case DELETE_TASK_SUCCESS:
    const deletedTaskId = action.payload.data.id
    return {...state, error: null, tasks: state.tasks.filter(task => task.id != deletedTaskId)}
  default:
    return {...state}
  }
}

const sortTasks = (tasks) => {
  return tasks.sort((a, b) => {
    if (a.completed === b.completed) {
      return a.createdAt >= b.createdAt;
    }

    if (a.completed && !b.completed) {
      return -1;
    }

    return 1;
  })
}