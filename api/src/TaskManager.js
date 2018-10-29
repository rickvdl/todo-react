export default class TaskManager {

  constructor(dataManager) {
    this.dataManager = dataManager
  }

  getAllTasksByUserId(userId) {
    return this.getAllTasks().filter(task => task.userId === userId).map(task => {
      const newTask = task
      delete task.userId
      return task
    })
  }

  getAllTasks() {
    return this.dataManager.retrieve('tasks', []).sort((a, b) => a.id > b.id)
  }

  createTask(userId, name, description) {
    const tasks = this.getAllTasks()
    const createdAt = Math.floor(Date.now() / 1000)
    const completed = false
    const id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1
    tasks.push({id, userId, name, description, createdAt, completed})

    this.dataManager.store('tasks', tasks)

    return id
  }

  deleteTask(id, userId) {
    const task = this.getAllTasks().find(task => task.id == id && task.userId == userId)
    
    if (!task) {
      throw 'Task not found'
    }

    const tasks = this.getAllTasks().filter(task => task.id != id)
    this.dataManager.store('tasks', tasks)
  }

  completeTask(id, userId) {
    this.setTaskCompleted(id, userId, true)
  }

  uncompleteTask(id, userId) {
    this.setTaskCompleted(id, userId, false)
  }

  setTaskCompleted(id, userId, completed) {
    const tasks = this.getAllTasks().map(task => {
      return task.id == id && task.userId == userId ? {...task, completed} : task
    })
    this.dataManager.store('tasks', tasks)
  }
}