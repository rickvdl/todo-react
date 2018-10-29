import React, { Component } from 'react'
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import Login from './containers/Login'
import Tasks from './containers/Tasks'
import Task from './containers/Task'
import NewTask from './containers/Tasks/new'
import NotFound from './containers/NotFound'
import { setToken } from './actions'

class App extends Component {
  
  componentDidMount() {
    this.props.setToken(localStorage.getItem('token'))
  }

  render() {
    const { token } = this.props
    const authenticated = token !== 'null' && token !== null

    return (
      <Switch>
        {!authenticated &&
          <Route path='/' component={Login}/>
        }
        {authenticated &&
          <Switch>
            <AuthenticatedRoute authenticated={authenticated} path='/' exact component={Tasks}/>
            <AuthenticatedRoute authenticated={authenticated} path='/task/new' component={NewTask}/>
            <AuthenticatedRoute authenticated={authenticated} path='/task/:id' component={Task}/>
            <Route path='/' component={NotFound}/>
          </Switch>
        }
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.auth
  }
}

const mapDispatchToProps = {
  setToken
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
