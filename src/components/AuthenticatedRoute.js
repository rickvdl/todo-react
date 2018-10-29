import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

export default ({ component, authenticated, ...rest }) => {
  const Component = component

  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}