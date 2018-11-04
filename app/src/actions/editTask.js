import { GET_TASKS } from './tasks'

export const EDIT_TASK = 'EDIT_TASK'
export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS'
export const EDIT_TASK_FAIL = 'EDIT_TASK_FAIL'

export const EDIT_TASK_CLEANUP = 'EDIT_TASK_CLEANUP'

export const editTask = (id, name, description) => {
  return {
    type: EDIT_TASK,
    payload: {
      request: {
        url: `/task/${id}`,
        method: 'put',
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

export const editTaskCleanup = () => {
  return {
    type: EDIT_TASK_CLEANUP
  }
}