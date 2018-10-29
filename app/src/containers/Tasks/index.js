import TasksScreen from '../../screens/Tasks'
import { connect } from 'react-redux'
import { getTasks, logout } from '../../actions'

const mapStateToProps = state => {
  return {
    auth: state.auth,
    ...state.tasks,
  }
}

const mapDispatchToProps = {
  getTasks,
  logout
}


export default connect(mapStateToProps, mapDispatchToProps)(TasksScreen)