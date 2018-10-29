import React, { Component } from 'react'
import {
  withRouter,
  NavLink
} from 'react-router-dom'

class NewTask extends Component {

  render() {

    return (
      <div>
        <h1>New task</h1>
        <NavLink to="/tasks">Tasks</NavLink>
      </div>
    )
  }
}

export default withRouter(NewTask)