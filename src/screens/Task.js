import React, { Component, Fragment } from 'react'
import {
  withRouter,
  NavLink,
  Redirect
} from 'react-router-dom'
import Screen from '../components/Screen'
import { Card, Button } from 'reactstrap'

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
                <p>{task.description}</p>
              </Fragment>
            }
            
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              {task &&
                <div>
                  <Button color={'danger'} onClick={() => this.onClickDelete()}>Delete</Button>
                  <Button color={task.completed ? 'warning' : 'success'} style={{marginLeft: 10}} onClick={() => this.onClickToggleComplete()}>{task.completed ? 'Uncomplete' : 'Complete'}</Button>
                </div>
              }
              <div>
                <NavLink to={'/'}><Button outline  color="success">Back</Button></NavLink>
              </div>
            </div>
          </Card>
        </div>
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

  onClickDelete() {
    const { deleteTask } = this.props

    const task = this.getTask()
    if (!task) {
      return
    }

    this.setState({deleting: true})

    deleteTask(task.id)
  }
}

export default withRouter(Task)