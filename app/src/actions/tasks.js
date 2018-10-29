export const GET_TASKS = 'GET_TASKS'
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS'
export const GET_TASKS_FAIL = 'GET_TASKS_FAIL'

export const NEW_TASK = 'NEW_TASK'
export const NEW_TASK_SUCCESS = 'NEW_TASK_SUCCESS'
export const NEW_TASK_FAIL = 'NEW_TASK_FAIL'

export const getTasks = () => {
  return {
    type: GET_TASKS,
    payload: {
      request: {
        url: '/tasks',
      }
    }
  }
}

export const newTask = (name, description) => {
  return {
    type: NEW_TASK,
    payload: {
      request: {
        url: '/task',
        method: 'post',
        data: {
          name,
          description
        }
      }
    },
    options: {
      onSuccess({ dispatch }) {
        dispatch({ type: GET_TASKS });
     },
    }
  }
}