import React from 'react'
import TasksScreen from '../../screens/Tasks'
import { connect } from 'react-redux'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { getTasks, logout } from '../../../actions'

class TasksContainer extends React.Component {

  render() {
    return (
      <Route exact path="/tasks">
        {this.loggedIn() ?
          <TasksScreen {...this.props} />
          :
          <Redirect to="/"/>
        }
      </Route>
    )
  }

  loggedIn() {
    const { auth } = this.props

    return auth.token !== null
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    ...state.tasks,
  }
}

const mapDispatchToProps = {
  getTasks,
  logout
}


export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)