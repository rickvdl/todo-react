import React, { Component } from 'react'
import {
  withRouter,
  NavLink
} from 'react-router-dom'

const Task = props => {
  const { id, name, completed } = props
  const url = `/${id}`

  return (
    <div>
      <NavLink to={url}>{name} {completed ? 'X' : ''}</NavLink>
    </div>
  )
}

class Tasks extends Component {

  componentDidMount() {
    this.props.getTasks()
  }

  render() {
    const { loading, error, tasks } = this.props
    
    return (
      <div>
        <h1>Tasks</h1>
        <NavLink to="/new">New</NavLink>
        <button onClick={() => this.props.logout()}>Logout</button>
        {error &&
          <h3>{error}</h3>
        }

        {tasks.map(task => <Task key={String(task.id)} {...task}/>)}
      </div>
    )
  }
}

export default withRouter(Tasks)