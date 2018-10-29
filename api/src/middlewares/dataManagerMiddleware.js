import DataManager from '../DataManager'
import UserManager from '../UserManager'
import TaskManager from '../TaskManager'

export default (dataManager) => async (request, response, next) => {
  request.dataManager = dataManager
  request.userManager = new UserManager(dataManager)
  request.taskManager = new TaskManager(dataManager)

  next()
}