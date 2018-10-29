import React from 'react'
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Form, FormGroup, Button } from 'reactstrap'
import Input from './Input'
import { taskName } from './validators'

class NewTaskForm extends React.Component {

  render() {
    const { handleSubmit, valid, invalid, pristine, submitting } = this.props

    return (
      <Form onSubmit={handleSubmit}>
        <input type='hidden' value='something'/>
        <FormGroup>
          <Field
            type={'text'}
            name={'name'}
            label={'Name'}
            placeholder={'Clean the dishes'}
            component={Input}
            validate={taskName}
          />
        </FormGroup>
        <FormGroup>
          <Field 
            type={'textarea'}
            name={'description'}
            label={'Description'}
            placeholder={'Optional description'}
            component={Input}
          />
        </FormGroup>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Button color="primary" disabled={pristine || invalid || submitting || !valid}>Create task</Button>
          <NavLink id={'backToTasksButton'} to="/"><Button outline  color="success">Back</Button></NavLink>
        </div>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'newTask'
})(NewTaskForm)