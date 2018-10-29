import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import { Badge } from 'reactstrap'
import moment from 'moment'

const Task = props => {
  const { id, name, completed, history } = props

  const createdAt = moment(props.createdAt * 1000)

  return (
    <tr onClick={() => history.push(`/task/${id}`)}>
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
      <td>
        {createdAt.fromNow()}
      </td>
    </tr>
  )
}

export default withRouter(Task)