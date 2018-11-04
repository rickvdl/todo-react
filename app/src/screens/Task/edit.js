import React, { Component } from 'react'
import {
  withRouter,
  Redirect
} from 'react-router-dom'
import EditTaskForm from '../../components/forms/EditTaskForm'
import Screen from '../../components/Screen'
import { Card, Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class EditTask extends Component {

  state = {
    modalOpen: false,
    deleting: false,
    loadedTasks: false,
  }

  componentDidMount() {
    if (!this.state.loadedTasks) {
      this.setState({loadedTasks: true})
      this.props.getTasks()
    }
  }

  render() {
    const { deleting } = this.state
    const { loading, error, task, success } = this.props
    
    if (deleting && !loading) {
      return (<Redirect to={'/'}/>)
    }

    if (success === true) {

      return (
        <Redirect to={`/task/${task.id}`}/>
      )
    }

    return (
      <Screen>
        <div id={'newTask'}>
          <Card id={'newTaskContainer'}>
            {!this.notFound() &&
              <h1>Edit task</h1>
            }
            {error &&
              <Alert color="danger">{error}</Alert>
            }
            {loading
              ?
              <h2>Loading...</h2>
              :
              this.renderForm()
            }
          </Card>
        </div>
      </Screen>
    )
  }

  notFound() {
    return !this.props.task && this.state.loadedTasks === true
  }

  renderForm() {
    const { task } = this.props

    if (this.notFound()) {
      return (<h2 style={{textAlign: 'center'}}>Not found</h2>)
    }

    if (!task) {
      return (<h2 style={{textAlign: 'center'}}>Error</h2>)
    }

    return (
      <EditTaskForm onPressDelete={() => this.openModal()} task={task} onSubmit={(values) => this.submitForm(values)}/>
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

  deleteTask() {
    const { deleteTask, task} = this.props

    if (!task) {
      return
    }

    this.setState({deleting: true})

    deleteTask(task.id)
  }

  closeModal() {
    this.setState({modalOpen: false})
  }

  openModal() {
    this.setState({modalOpen: true})
  }
}

export default withRouter(EditTask)