export const COMPLETE_TASK = 'COMPLETE_TASK'
export const COMPLETE_TASK_SUCCESS = 'COMPLETE_TASK_SUCCESS'
export const COMPLETE_TASK_FAIL = 'COMPLETE_TASK_FAIL'

export const UNCOMPLETE_TASK = 'UNCOMPLETE_TASK'
export const UNCOMPLETE_TASK_SUCCESS = 'UNCOMPLETE_TASK_SUCCESS'
export const UNCOMPLETE_TASK_FAIL = 'UNCOMPLETE_TASK_FAIL'

export const completeTask = (id) => {
  return {
    type: COMPLETE_TASK,
    payload: {
      request: {
        url: `/task/${id}/complete`,
        method: 'post'
      },
      test: 'ja'
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
      test: 'ja'
    }
  }
}