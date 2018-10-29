import React, { Component, Fragment } from 'react'
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import Login from './containers/Login'
import Tasks from './containers/Tasks'
import NewTask from './containers/Tasks/new'
import NotFound from './containers/NotFound'

class App extends Component {
  render() {
    const { token } = this.props
    const authenticated = token !== null

    return (
      <Switch>
        <Route path='/login' component={Login}/>
        <AuthenticatedRoute authenticated={authenticated} path='/' exact component={Tasks}/>
        <AuthenticatedRoute authenticated={authenticated} path='/new' component={NewTask}/>
        <Route path='/' component={NotFound}/>
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.auth
  }
}

export default withRouter(connect(mapStateToProps)(App))
