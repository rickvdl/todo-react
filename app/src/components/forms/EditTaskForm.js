import React from 'react'
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Form, FormGroup, Button } from 'reactstrap'
import Input from './Input'
import { taskName } from './validators'

class EditTaskForm extends React.Component {

  state = {
    initialized: false
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.initialized !== true) {
      this.setState({initialized: true})
      this.props.initialize({...nextProps.task})
    }
  }

  render() {
    const { handleSubmit, valid, invalid, pristine, submitting, task } = this.props

    return (
      <Form onSubmit={handleSubmit}>
        <input type='hidden' value='something'/>
        <FormGroup>
          <Field
            type={'text'}
            name={'name'}
            label={'Name'}
            value={task.name}
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
            value={task.description}
            placeholder={'Optional description'}
            component={Input}
          />
        </FormGroup>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Button color="primary" disabled={pristine || invalid || submitting || !valid}>Update task</Button>
          <NavLink id={'backToTasksButton'} to={`/task/${task.id}`}><Button outline  color="success">Back</Button></NavLink>
        </div>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'editTask'
})(EditTaskForm)