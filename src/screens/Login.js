import React, { Component } from 'react'
import {
  Redirect,
  withRouter
} from 'react-router-dom'
import LoginForm from '../components/forms/LoginForm'
import { Alert } from 'reactstrap'

class Login extends Component {
  
  render() {
    const { auth } = this.props

    if (auth.token) {
      return (<Redirect to={'/'}/>)
    }
    
    return (
      <div>
        <h1>Login</h1>
        {auth.error &&
          <Alert color="danger">{auth.error}</Alert>
        }
        <LoginForm onSubmit={(values) => this.submitForm(values)} />
      </div>
    )
  }

  submitForm(values) {
    this.props.login(values.email, values.password)
  }
}

export default withRouter(Login)