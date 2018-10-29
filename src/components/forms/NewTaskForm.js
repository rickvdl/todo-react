import React from 'react'
import { Field, reduxForm } from 'redux-form'

class NewTaskForm extends React.Component {

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Field name="description" component="textarea" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'newTask'
})(NewTaskForm)