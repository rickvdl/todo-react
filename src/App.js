import React, { Component, Fragment } from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import Tasks from './components/screens/Tasks'
import Login from './components/screens/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Route exact path="/" component={Tasks}/>
            <Route path="/login" component={Login}/>
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
