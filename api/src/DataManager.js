import { LocalStorage } from 'node-localstorage'
import config from './config'

export default class DataManager {

  constructor() {
    this.localStorage = new LocalStorage(config.get('storage.directory'))
  }

  store(key, data) {
    this.localStorage.setItem(key, JSON.stringify(data))
  }

  retrieve(key, defaultValue = null) {
    try {
      let data =  JSON.parse(this.localStorage.getItem(key))

      if (!data && defaultValue !== null) {
        this.store(key, defaultValue)
      }

      return data || defaultValue
    } catch (error) {
      return defaultValue
    }
  }
}