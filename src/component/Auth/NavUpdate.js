import React from 'react';
import { MDBNavItem, MDBNavLink } from 'mdbreact';
import Auth from './UserAuth';

import { withRouter } from 'react-router-dom';
class NavUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  //   render() {
  //     let isLoggedIn = this.state.isLoggedIn;
  //     return isLoggedIn ? (
  //       <>
  //   <MDBNavItem>
  //     <MDBNavLink to='/dashboard'>Dashboard</MDBNavLink>
  //   </MDBNavItem>
  //   <MDBNavItem>
  //     <MDBNavLink to='/'> Log Out</MDBNavLink>
  //   </MDBNavItem>
  //       </>
  //     ) : (
  //       <>
  //   <MDBNavItem>
  //     <MDBNavLink to='/signin'>Sign In</MDBNavLink>
  //   </MDBNavItem>
  //   <MDBNavItem>
  //     <MDBNavLink to='/signup'>Sign Up</MDBNavLink>
  //   </MDBNavItem>
  //       </>
  //     );
  //   }
  logout = () => {
    console.log(' Logout Clicked' + Auth.getAuth());
    Auth.signout();
    console.log(' Logout Clicked' + Auth.getAuth());
    // const { history } = this.props;
    // history.push('/');
  };
  render() {
    let isLoggedIn = Auth.getAuth();
    console.log('Nav Update :' + isLoggedIn);
    return isLoggedIn ? (
      <>
        <MDBNavItem>
          <MDBNavLink to='/dashboard'>Dashboard</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to='/' onClick={this.logout}>
            Log Out
          </MDBNavLink>
        </MDBNavItem>
      </>
    ) : (
      <>
        <MDBNavItem>
          <MDBNavLink to='/signin'>Sign In</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to='/signup'>Sign Up</MDBNavLink>
        </MDBNavItem>
      </>
    );
  }
}

export default withRouter(NavUpdate);
