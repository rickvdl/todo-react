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
    const { handleSubmit, valid, invalid, pristine, submitting, task, onPressDelete } = this.props

    return (
      task ?
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
            <div style={{display: 'flex', justifyContent: 'flex-start'}}>
              <Button color="primary" disabled={pristine || invalid || submitting || !valid}>Update task</Button>
              <Button style={{marginLeft: 10}} color={'danger'} onClick={() => onPressDelete()}>Delete</Button>
            </div>
            <NavLink id={'backToTasksButton'} to={`/task/${task.id}`}><Button outline  color="success">Back</Button></NavLink>
          </div>
        </Form>
        :
        <div />
    )
  }
}

export default reduxForm({
  form: 'editTask'
})(EditTaskForm)