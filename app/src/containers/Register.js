import RegisterScreen from '../screens/Register'
import { connect } from 'react-redux'
import { register } from '../actions'
import { withRouter } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    ...state,
  }
}

const mapDispatchToProps = {
  register
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterScreen))