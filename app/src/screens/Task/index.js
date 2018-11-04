import React, { Component, Fragment } from 'react'
import {
  withRouter,
  NavLink,
  Redirect
} from 'react-router-dom'
import Screen from '../../components/Screen'
import { Card, Button } from 'reactstrap'

class Task extends Component {

  state = {
    loadedTasks: false,
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
              <h2>Loading...</h2>
            }

            {(loadedTasks && !task) && 
              <h2>Task not found</h2>
            }

            {task &&
              <Fragment>
                <h2>{task.name} <NavLink id={'newTaskButton'} to={`/task/${task.id}/edit`}><Button size={'sm'} color="warning">Edit</Button></NavLink></h2>
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
                <Button color={task.completed ? 'warning' : 'success'} style={{marginLeft: 10}} onClick={() => this.onClickToggleComplete()}>{task.completed ? 'Uncomplete' : 'Complete'}</Button>
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
}

export default withRouter(Task)