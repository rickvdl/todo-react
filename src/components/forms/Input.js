import React from 'react'
import { Label, Input as ReactstrapInput, FormFeedback } from 'reactstrap'

const Input = ({ name, input, placeholder, label, type, meta: { touched, error, warning }}) => (
  <div>
    <Label for={name}>{label}</Label>
    <ReactstrapInput
      invalid={touched && error}
      valid={touched && !error && input.value !== ''}
      type={type} 
      name={name}
      placeholder={placeholder}
      autoComplete={'off'}
      {...input}
    />
    {touched && error &&
      <FormFeedback>{error}</FormFeedback>
    }
  </div>
)

export default Input