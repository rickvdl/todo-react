import React, { Component } from 'react'
import {
  Redirect,
  withRouter
} from 'react-router-dom'
import LoginForm from '../components/forms/LoginForm'

class Login extends Component {

  render() {
    const { error, loading, auth } = this.props

    if (auth.token) {
      return (<Redirect to={'/'}/>)
    }
    
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