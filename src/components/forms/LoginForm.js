import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

class LoginForm extends React.Component {

  render() {
    const { handleSubmit } = this.props

    return (
      <Form onSubmit={handleSubmit}>
        <input type='hidden' value='something'/>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email" 
            name="email"
            placeholder="john@me.com"
            component={'input'}
            tag={Field}
            autocomplete={'off'}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password" 
            name="password"
            component={'input'}
            tag={Field}
            autocomplete={'off'}
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