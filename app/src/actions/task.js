import { GET_TASKS } from './tasks'

export const COMPLETE_TASK = 'COMPLETE_TASK'
export const COMPLETE_TASK_SUCCESS = 'COMPLETE_TASK_SUCCESS'
export const COMPLETE_TASK_FAIL = 'COMPLETE_TASK_FAIL'

export const UNCOMPLETE_TASK = 'UNCOMPLETE_TASK'
export const UNCOMPLETE_TASK_SUCCESS = 'UNCOMPLETE_TASK_SUCCESS'
export const UNCOMPLETE_TASK_FAIL = 'UNCOMPLETE_TASK_FAIL'

export const DELETE_TASK = 'DELETE_TASK'
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS'
export const DELETE_TASK_FAIL = 'DELETE_TASK_FAIL'

export const NEW_TASK = 'NEW_TASK'
export const NEW_TASK_SUCCESS = 'NEW_TASK_SUCCESS'
export const NEW_TASK_FAIL = 'NEW_TASK_FAIL'

export const CLEANUP_TASK = 'CLEANUP_TASK'

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

export const completeTask = (id) => {
  return {
    type: COMPLETE_TASK,
    payload: {
      request: {
        url: `/task/${id}/complete`,
        method: 'post'
      },
    }
  }
}

export const uncompleteTask = (id) => {
  return {
    type: UNCOMPLETE_TASK,
    payload: {
      request: {
        url: `/task/${id}/uncomplete`,
        method: 'post'
      },
    }
  }
}

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: {
      request: {
        url: `/task/${id}`,
        method: 'delete'
      },
    },
    options: {
      onSuccess({ dispatch }) {
        dispatch({ type: 'GET_TASKS' });
     },
    }
  }
}

export const cleanupTask = () => {
  return {
    type: CLEANUP_TASK,
    payload: {}
  }
}