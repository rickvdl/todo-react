import NewTaskScreen from '../../screens/Tasks/new'
import { connect } from 'react-redux'
import { newTask } from '../../actions'

const mapStateToProps = state => {
  return {
    auth: state.auth,
    ...state.tasks,
  }
}

const mapDispatchToProps = {
  newTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTaskScreen)