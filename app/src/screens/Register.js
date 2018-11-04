import React, { Component } from 'react'
import {
  Redirect,
  withRouter,
  NavLink
} from 'react-router-dom'
import RegisterForm from '../components/forms/RegisterForm'
import { Alert, Card } from 'reactstrap'

class Register extends Component {

  componentWillUnmount() {
    this.props.cleanAuthState()
  }
  
  render() {
    const { auth } = this.props

    if (auth.token !== null && auth.token !== 'null') {
      return (<Redirect to={'/'}/>)
    }
    
    return (
      <div id={'register'}>
        <Card body id={'registerFormContainer'}>
          <h1>Register</h1>
          {auth.error &&
            <Alert color="danger">{auth.error}</Alert>
          }
          {auth.success &&
            <Alert color="success">Your account has been created! You can now <NavLink to={'/'}>log in</NavLink></Alert>
          }
          <RegisterForm onSubmit={(values) => this.submitForm(values)} />
        </Card>
      </div>
    )
  }

  submitForm(values) {
    this.props.register(values.name, values.email, values.password)
  }
}

export default withRouter(Register)