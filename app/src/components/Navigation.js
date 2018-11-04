import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'
import {
  NavLink
} from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions'

class Navigation extends React.Component {

  state = {
    isOpen: false
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavLink className={'navbar-brand'} to={'/'}>Task manager</NavLink>
          <NavbarToggler onClick={() => this.toggle()} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact className={'nav-link'} to="/">Tasks</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact className={'nav-link'} to="/task/new">New task</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={(e) => this.onPressLogout(e)} className={'nav-link'} to="null">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }

  onPressLogout(e) {
    e.preventDefault()
    this.props.logout()
  }
}

const mapDispatchToProps = {
  logout
}

export default connect(null, mapDispatchToProps)(Navigation)