import React, { Component } from 'react'
import {
  withRouter,
  Redirect
} from 'react-router-dom'
import NewTaskForm from '../../components/forms/NewTaskForm'
import Screen from '../../components/Screen'
import { Card, Alert } from 'reactstrap'

class NewTask extends Component {

  render() {
    const { loading, error, id } = this.props

    if (id !== null && id) {

      return (
        <Redirect to={'/'}/>
      )
    }

    return (
      <Screen>
        <div id={'newTask'}>
          <Card id={'newTaskContainer'}>
            <h1>New task</h1>
            {error &&
              <Alert color="danger">{error}</Alert>
            }
            <NewTaskForm onSubmit={(values) => this.submitForm(values)}/>
          </Card>
        </div>
      </Screen>
    )
  }

  componentWillUnmount() {
    this.props.cleanupTask()
  }

  submitForm(values) {
    const { name, description } = values
    const { newTask } = this.props
    
    this.setState({loading: true})
    newTask(name, description)
  }
}

export default withRouter(NewTask)