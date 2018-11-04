import LoginScreen from '../screens/Login'
import { connect } from 'react-redux'
import { login, cleanAuthState } from '../actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    ...state,
  }
}

const mapDispatchToProps = {
  login,
  cleanAuthState
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginScreen))