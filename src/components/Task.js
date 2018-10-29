import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import { Badge } from 'reactstrap'

const Task = props => {
  const { id, name, completed, history } = props

  return (
    <tr onClick={() => history.push(`/task/${id}`)}>
      <td>
        {id}
      </td>
      <td>
        {name}
      </td>
      <td>
        {completed ?
          <Badge color={'success'}>Completed</Badge>
          :
          <Badge color={'secondary'}>Uncompleted</Badge>
        }
      </td>
    </tr>
  )
}

export default withRouter(Task)