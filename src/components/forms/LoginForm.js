import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Input from './Input'
import { Button, Form, FormGroup, Label, Input as InputR } from 'reactstrap'
import { email } from './validators'

class LoginForm extends React.Component {

  render() {
    const { handleSubmit } = this.props

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
          <Label for="password">Password</Label>
          <InputR
            type="password" 
            name="password"
            component={'input'}
            tag={Field}
            autoComplete={'off'}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'login'
})(LoginForm)