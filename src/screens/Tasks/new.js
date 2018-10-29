import React, { Component } from 'react'
import {
  withRouter,
  NavLink
} from 'react-router-dom'
import NewTaskForm from '../../components/forms/NewTaskForm'

class NewTask extends Component {

  render() {
    return (
      <div>
        <h1>New task</h1>
        <NewTaskForm onSubmit={(values) => this.submitForm(values)}/>
        <NavLink to="/">Tasks</NavLink>
      </div>
    )
  }

  submitForm(values) {
    const { name, description } = values
    const { history, newTask } = this.props
    
    newTask(name, description)
    history.push('/')
  }
}

export default withRouter(NewTask)