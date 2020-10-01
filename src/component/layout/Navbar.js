import React, { Component } from 'react';

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdbreact';
import './NavbarCss.css';
import UserAuth from '../Auth/NavUpdate';
class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <section className='costom'>
        <MDBNavbar
          color='default-color'
          dark
          expand='md'
          className='customClass'>
          <MDBNavbarBrand href='/'>
            <strong className='white-text ml-5'>Navbar</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id='navbarCollapse3' isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right className='nav-nav-bar font-weight-bold  '>
              {/* <MDBNavItem>
                <MDBNavLink to='/dashboard'>Dashboard</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/signin'>Sign In</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/signup'>Sign Up</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='/'> Log Out</MDBNavLink>
              </MDBNavItem> */}
              <UserAuth />
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </section>
    );
  }
}

export default NavbarPage;
