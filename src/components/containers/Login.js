import React from 'react'
import LoginScreen from '../screens/Login'
import { connect } from 'react-redux'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { login } from '../../actions'

class LoginContainer extends React.Component {

  render() {
    return (
      <Route exact path="/" render={() => this.loggedIn() ? <Redirect to="/tasks"/> : <LoginScreen {...this.props} />} />
    )
  }

  loggedIn() {
    const { token } = this.props

    return token !== null
  }
}

const mapStateToProps = state => {
  return {
    ...state.auth,
  }
}

const mapDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)