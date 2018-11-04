import * as web from 'express-decorators'
import HTTPErrors from 'http-errors'

class TaskController {

  @web.get('/tasks')
  getAllTasks(request, response) {
    response.send(request.taskManager.getAllTasksByUserId(request.user.id))
  }

  @web.post('/task')
  createTask(request, response) {
    const { name, description } = request.body

    if (!name) {
      throw HTTPErrors.BadRequest('A task must contain a name')
    }

    const id = request.taskManager.createTask(request.user.id, name, description)
    response.send(201, {success: true, id: parseInt(id)})
  }

  @web.del('/task/:id')
  deleteTask(request, response) {
    const { id } = request.params

    try {
      request.taskManager.deleteTask(id, request.user.id)
      response.status(202).send({id: parseInt(id)})
    }
    catch (error) {
      throw HTTPErrors.BadRequest(error)
    }
  }

  @web.put('/task/:id')
  updateTask(request, response) {
    const { id } = request.params
    const { name, description } = request.body

    try {
      request.taskManager.updateTask(id, request.user.id, name, description)
      response.status(202).send({id: parseInt(id)})
    }
    catch (error) {
      throw HTTPErrors.BadRequest(error)
    }
  }

  @web.post('/task/:id/complete')
  completeTask(request, response) {
    const { id } = request.params

    try {
      request.taskManager.completeTask(id, request.user.id)
      response.status(202).send({id: parseInt(id)})
    }
    catch (error) {
      throw HTTPErrors.BadRequest(error)
    }
  }

  @web.post('/task/:id/uncomplete')
  uncompleteTask(request, response) {
    const { id } = request.params

    try {
      request.taskManager.uncompleteTask(id, request.user.id)
      response.status(202).send({id: parseInt(id)})
    }
    catch (error) {
      throw HTTPErrors.BadRequest(error)
    }
  }
}

export default TaskController