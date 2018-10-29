import React, { Component, Fragment } from 'react'
import {
  withRouter,
  NavLink,
  Redirect
} from 'react-router-dom'
import Screen from '../components/Screen'
import { Card, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class Task extends Component {

  state = {
    loadedTasks: false,
    deleting: false
  }

  componentDidMount() {
    if (!this.state.loadedTasks) {
      this.setState({loadedTasks: true})
      this.props.getTasks()
    }
  }

  render() {
    const { loadedTasks, deleting } = this.state
    const { loading, error } = this.props
    
    const task = this.getTask()
    
    if (deleting && !loading) {
      return (<Redirect to={'/'}/>)
    }
    
    return (
      <Screen>
        <div id={'task'}>
          <Card id={'taskContainer'}>
            {loading &&
              <p>Laden...</p>
            }

            {(loadedTasks && !task) && 
              <p>Task not found</p>
            }

            {task &&
              <Fragment>
                <h2>{task.name}</h2>
                <hr />
                {task.description ?
                  <p>{task.description}</p>
                  :
                  <i>This task has no description</i>
                }
              </Fragment>
            }
            
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 20}}>
              {task &&
                <div>
                  <Button color={'danger'} onClick={() => this.openModal()}>Delete</Button>
                  <Button color={task.completed ? 'warning' : 'success'} style={{marginLeft: 10}} onClick={() => this.onClickToggleComplete()}>{task.completed ? 'Uncomplete' : 'Complete'}</Button>
                </div>
              }
              <div>
                <NavLink to={'/'}><Button outline  color="success">Back</Button></NavLink>
              </div>
            </div>
          </Card>
        </div>
        {task &&
          <Modal isOpen={this.state.modalOpen} toggle={() => this.closeModal()}>
            <ModalHeader>Delete task</ModalHeader>
            <ModalBody>
              Are you sure that you want to delete task <q>{task.name}</q>?
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={() => this.deleteTask()}>Yes!</Button>
              <Button color="secondary" onClick={() => this.closeModal()}>No</Button>
            </ModalFooter>
          </Modal>
        }
      </Screen>
    )
  }

  getTask() {
    return this.props.tasks.find(task => task.id == this.props.match.params.id)
  }

  onClickToggleComplete() {
    const { completeTask, uncompleteTask } = this.props

    const task = this.getTask()
    if (!task) {
      return
    }

    if (task.completed) {
      uncompleteTask(task.id)
    } else {
      completeTask(task.id)
    }
  }

  deleteTask() {
    const { deleteTask } = this.props

    const task = this.getTask()
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

export default withRouter(Task)