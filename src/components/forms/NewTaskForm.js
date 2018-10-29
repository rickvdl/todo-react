import React from 'react'
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class NewTaskForm extends React.Component {

  render() {
    const { handleSubmit } = this.props

    return (
      <Form onSubmit={handleSubmit}>
        <input type='hidden' value='something'/>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text" 
            name="name"
            placeholder="Clean the dishes"
            component={'input'}
            tag={Field}
            autoComplete={'off'}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            name="description"
            component={'textarea'}
            tag={Field}
            autoComplete={'off'}
            placeholder={'Optional description'}
          />
        </FormGroup>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Button color="primary">Create task</Button>
          <NavLink id={'backToTasksButton'} to="/"><Button outline  color="success">Back</Button></NavLink>
        </div>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'newTask'
})(NewTaskForm)