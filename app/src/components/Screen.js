import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import Navigation from './Navigation'

class Screen extends React.Component {

  render () {
    return (
      <div>
        <Navigation />
        <div id={'container'}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default withRouter(Screen)