import React, { Component } from 'react'
import {
  withRouter,
  Redirect
} from 'react-router-dom'
import EditTaskForm from '../../components/forms/EditTaskForm'
import Screen from '../../components/Screen'
import { Card, Alert } from 'reactstrap'

class EditTask extends Component {

  componentDidMount() {
    this.props.getTasks()
  }

  render() {
    const { loading, error, task, success } = this.props

    if (success === true) {

      return (
        <Redirect to={`/task/${task.id}`}/>
      )
    }

    return (
      <Screen>
        <div id={'newTask'}>
          <Card id={'newTaskContainer'}>
            <h1>Edit task</h1>
            {error &&
              <Alert color="danger">{error}</Alert>
            }
            {loading 
              ?
              <h2>Loading...</h2>
              :
              <EditTaskForm task={task} onSubmit={(values) => this.submitForm(values)}/>
            }
          </Card>
        </div>
      </Screen>
    )
  }

  componentWillUnmount() {
    this.props.editTaskCleanup()
  }

  submitForm(values) {
    const { name, description } = values
    const { editTask } = this.props
    
    editTask(this.props.task.id, name, description)
  }
}

export default withRouter(EditTask)