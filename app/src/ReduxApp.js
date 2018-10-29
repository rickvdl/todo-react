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
import Task from './containers/Task'
import NewTask from './containers/Tasks/new'
import NotFound from './containers/NotFound'
import Register from './containers/Register'
import { setToken } from './actions'

class App extends Component {
  
  componentDidMount() {
    this.props.setToken(localStorage.getItem('token'))
  }

  render() {
    const { token } = this.props
    const authenticated = token !== 'null' && token !== null

    return (
      <Fragment>
        {!authenticated &&
          <Switch>
            <Route exact path='/register' component={Register}/>
            <Route path='/' component={Login}/>
          </Switch>
        }
        {authenticated &&
          <Switch>
            <AuthenticatedRoute authenticated={authenticated} path='/' exact component={Tasks}/>
            <AuthenticatedRoute authenticated={authenticated} path='/task/new' component={NewTask}/>
            <AuthenticatedRoute authenticated={authenticated} path='/task/:id' component={Task}/>
            <Route path='/' component={NotFound}/>
          </Switch>
        }
      </Fragment>
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
