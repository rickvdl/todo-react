import React, { Component } from 'react'
import {
  withRouter,
} from 'react-router-dom'
import NewTaskForm from '../../components/forms/NewTaskForm'
import Screen from '../../components/Screen'
import { Card } from 'reactstrap'

class NewTask extends Component {

  render() {
    return (
      <Screen>
        <div id={'newTask'}>
          <Card id={'newTaskContainer'}>
            <h1>New task</h1>
            <NewTaskForm onSubmit={(values) => this.submitForm(values)}/>
          </Card>
        </div>
      </Screen>
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