import React, { Component, Fragment } from 'react'
import {
  withRouter,
  NavLink,
  Redirect
} from 'react-router-dom'

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
      <div>
        {loading &&
          <p>Laden...</p>
        }

        {(loadedTasks && !task) && 
          <p>Task not found</p>
        }

        {task &&
          <Fragment>
            <p>{task.name}</p>
            
            <button onClick={() => this.onClickToggleComplete()}>{task.completed ? 'Uncomplete' : 'Complete'}</button>
            <button onClick={() => this.onClickDelete()}>Delete</button>
          </Fragment>
        }

        <NavLink to={'/'}>Terug</NavLink>
      </div>
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