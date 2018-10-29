import { v4 as uuid } from 'uuid'

export default class UserManager {

  constructor(dataManager) {
    this.dataManager = dataManager
  }

  getUsers() {
    return this.dataManager.retrieve('users', []).sort((a, b) => a.id >= b.id)
  }

  addUser(name, email, password) {
    const users = this.getUsers()

    if (users.find(user => user.email === email)) {
      return false
    }

    const id = users.length > 0 ? users[users.length - 1].id + 1 : 1
    
    users.push({
      id,
      name,
      email,
      password
    })
    this.dataManager.store('users', users)
  }

  login(email, password) {
    const user = this.getUsers().find(user => user.email === email && user.password === password)
    if (!user) {
      throw 'Invalid login'
    }

    const token = uuid()
    const users = this.getUsers().map(user => {
      return user.email === email ? {...user, token} : user
    })

    this.dataManager.store('users', users)

    return token
  }

  getUserByToken(token) {
    return this.getUsers().find(user => user.token === token)
  }

  getUserById(userId) {
    return this.getUsers().find(user => user.id === userId)
  }

  getUserByEmail(email) {
    return this.getUsers().find(user => user.email === email)
  }

  deleteToken(userId) {
    const users = this.getUsers().map(user => {
      return {
        ...user,
        token: user.id === userId ? null : user.token
      }
    })
    this.dataManager.store('users', users)
  }
}