import React, { Component } from 'react'
import {
  BrowserRouter,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import ReduxApp from './ReduxApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/main.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <ReduxApp />
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
