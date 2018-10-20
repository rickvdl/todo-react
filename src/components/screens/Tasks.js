import React, { Component } from 'react'
import {
  withRouter
} from 'react-router-dom'

const Task = props => {
  const { name } = props

  return (
    <div>
      {name}
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