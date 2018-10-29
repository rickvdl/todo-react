import NewTaskScreen from '../../screens/Tasks/new'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    auth: state.auth,
    ...state.tasks,
  }
}

export default connect(mapStateToProps)(NewTaskScreen)