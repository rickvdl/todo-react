import LoginScreen from '../screens/Login'
import { connect } from 'react-redux'
import { login } from '../actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    ...state,
  }
}

const mapDispatchToProps = {
  login
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginScreen))