import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from './Input'
import { Button, Form, FormGroup } from 'reactstrap'
import { email, loginPassword } from './validators'

class LoginForm extends React.Component {

  render() {
    const { handleSubmit, valid, invalid, submitting, pristine } = this.props

    return (
      <Form onSubmit={handleSubmit}>
        <input type='hidden' value='something'/>
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
            validate={loginPassword}
          />
        </FormGroup>
        <Button color={'primary'} disabled={pristine || invalid || submitting || !valid}>Log in</Button>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'login'
})(LoginForm)