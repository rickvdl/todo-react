import React from 'react'
import TasksScreen from '../screens/Tasks'
import { connect } from 'react-redux'
import {
  Route,
  Redirect
} from 'react-router-dom'

class TasksContainer extends React.Component {

  render() {
    return (
      <Route path="/tasks" render={() => (
        this.loggedIn() ? (
          <TasksScreen />
        ) : (
          <Redirect to="/"/>
        )
      )}/>
    )
  }

  loggedIn() {
    const { auth } = this.props

    return auth.token !== null
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps)(TasksContainer)