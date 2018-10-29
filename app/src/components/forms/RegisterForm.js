import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from './Input'
import { Button, Form, FormGroup } from 'reactstrap'
import { name, email, password } from './validators'
import {
  NavLink,
  withRouter
} from 'react-router-dom'

class RegisterForm extends React.Component {

  render() {
    const { handleSubmit, valid, invalid, submitting, pristine } = this.props

    return (
      <Form onSubmit={handleSubmit}>
        <input type='hidden' value='something'/>
        <FormGroup>
          <Field
            name={'name'}
            type={'text'}
            placeholder="John"
            label={'Name'}
            component={Input}
            validate={name}
          />
        </FormGroup>
        <FormGroup>
          <Field
            name={'email'}
            type={'email'}
            placeholder="john@me.com"
            label={'Email'}
            component={Input}
            validate={email}
          />
        </FormGroup>
        <FormGroup>
          <Field
            name={'password'}
            type={'password'}
            label={'Password'}
            component={Input}
            validate={password}
          />
        </FormGroup>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Button color={'primary'} disabled={pristine || invalid || submitting || !valid}>Register</Button>
          <NavLink to={'/'}><Button color={'secondary'}>Login</Button></NavLink>
        </div>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'login'
})(withRouter(RegisterForm))