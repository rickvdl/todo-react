import NewTaskScreen from '../../screens/Tasks/new'
import { connect } from 'react-redux'
import { newTask, cleanupTask } from '../../actions'

const mapStateToProps = state => {
  return {
    auth: state.auth,
    ...state.task,
  }
}

const mapDispatchToProps = {
  newTask,
  cleanupTask
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskScreen)