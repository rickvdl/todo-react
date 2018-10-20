import React, { Component, Fragment } from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Login from './components/containers/Login'
import Tasks from './components/containers/Tasks'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Fragment>
              <Login />
              <Tasks />
            </Fragment>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
