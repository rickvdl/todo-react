import RegisterScreen from '../screens/Register'
import { connect } from 'react-redux'
import { register, cleanAuthState } from '../actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    ...state,
  }
}

const mapDispatchToProps = {
  register,
  cleanAuthState
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterScreen))