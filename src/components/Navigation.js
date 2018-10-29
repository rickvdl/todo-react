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
          <NavbarBrand href="" onClick={(e) => e.preventDefault()}>Task manager</NavbarBrand>
          <NavbarToggler onClick={() => this.toggle()} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className={'nav-link'} to="/">Tasks</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={'nav-link'} to="/task/new">New task</NavLink>
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

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)