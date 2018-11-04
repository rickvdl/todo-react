import TaskScreen from '../../screens/Task'
import { connect } from 'react-redux'
import { getTasks, completeTask, uncompleteTask, deleteTask } from '../../actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, props) => {
  return {
    ...state.tasks
  }
}

const mapDispatchToProps = {
  getTasks,
  completeTask,
  uncompleteTask,
  deleteTask
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskScreen))