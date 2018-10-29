import React, { Component } from 'react'
import {
  withRouter,
  NavLink
} from 'react-router-dom'
import { Table } from 'reactstrap'
import Task from '../../components/Task'
import Screen from '../../components/Screen'
import { Card } from 'reactstrap'

class Tasks extends Component {

  componentDidMount() {
    this.props.getTasks()
  }

  render() {
    const { loading, error, tasks } = this.props
    
    return (
      <Screen>
        <div id={'tasks'}>
          <Card id={'tasksContainer'} body>
            <h1>Tasks</h1>
              {error &&
                <h3>{error}</h3>
              }

              {tasks.length > 0 &&
                <Table hover={true}>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map(task => <Task key={String(task.id)} {...task}/>)}
                  </tbody>
                </Table>
              }
            <NavLink to="/task/new">New</NavLink>
            <button onClick={() => this.props.logout()}>Logout</button>
          </Card>
        </div>
      </Screen>
    )
  }
}

export default withRouter(Tasks)