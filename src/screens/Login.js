import React, { Component } from 'react'
import {
  Redirect,
  withRouter
} from 'react-router-dom'
import LoginForm from '../components/forms/LoginForm'
import { Alert, Card } from 'reactstrap'

class Login extends Component {
  
  render() {
    const { auth } = this.props

    if (auth.token !== null && auth.token !== 'null') {
      return (<Redirect to={'/'}/>)
    }
    
    return (
      <div id={'login'}>
        <Card body>
          <h1>Login</h1>
          {auth.error &&
            <Alert color="danger">{auth.error}</Alert>
          }
          <LoginForm onSubmit={(values) => this.submitForm(values)} />
        </Card>
      </div>
    )
  }

  submitForm(values) {
    this.props.login(values.email, values.password)
  }
}

export default withRouter(Login)