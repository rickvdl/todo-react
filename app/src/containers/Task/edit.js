import EditTaskScreen from '../../screens/Task/edit'
import { connect } from 'react-redux'
import { getTasks, editTask, editTaskCleanup, deleteTask } from '../../actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, props) => {
  const { id } = props.match.params

  return {
    ...state.editTask,
    tasks: state.tasks,
    task: state.tasks.tasks.find(t => t.id == id),
  }
}

const mapDispatchToProps = {
  getTasks,
  editTask,
  editTaskCleanup,
  deleteTask
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditTaskScreen))