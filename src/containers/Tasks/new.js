import React from 'react'
import NewTaskScreen from '../../screens/Tasks/new'
import { connect } from 'react-redux'
import {
  Route,
  Redirect
} from 'react-router-dom'

class TasksContainer extends React.Component {

  render() {
    return (
      <Route exact path="/tasks/new">
        <NewTaskScreen {...this.props} />
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

}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)