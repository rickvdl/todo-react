import TaskScreen from '../screens/Task'
import { connect } from 'react-redux'
import { getTasks, completeTask, uncompleteTask, deleteTask } from '../actions'

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

export default connect(mapStateToProps, mapDispatchToProps)(TaskScreen)