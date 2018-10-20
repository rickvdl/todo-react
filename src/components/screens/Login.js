import React, { Component } from 'react'
import {
  withRouter
} from 'react-router-dom'
import LoginForm from '../forms/LoginForm'

class Login extends Component {

  render() {
    const { error,loading } = this.props

    return (
      <div>
        <h1>Login</h1>

        <LoginForm onSubmit={(values) => this.submitForm(values)} />

        {error &&
          <p>{error}</p>
        }
      </div>
    )
  }

  submitForm(values) {
    this.props.login(values.email, values.password)
  }
}

export default withRouter(Login)