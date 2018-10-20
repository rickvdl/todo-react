import React from 'react'
import LoginScreen from '../screens/Login'
import { connect } from 'react-redux'
import {
  Route,
  Redirect
} from 'react-router-dom'

class LoginContainer extends React.Component {

  render() {
    return (
      <Route exact path="/" render={() => this.loggedIn() ? <Redirect to="/tasks"/> : <LoginScreen />} />
    )
  }

  loggedIn() {
    const { auth } = this.props

    return auth.token !== null
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(LoginContainer)