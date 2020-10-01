import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBAlert,
} from 'mdbreact';
// import firebase from '../config/firebase';
import { withRouter } from 'react-router-dom';
import Auth from './UserAuth';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
    };
  }

  test = () => {
    console.log(Auth.getAuth());
  };
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(event.target.name + event.target.value);
  };
  login = (event) => {
    event.preventDefault();
    if (
      !(this.state.email === 'admin@admin.com' && this.state.password === '123')
    ) {
      console.log('Email is :' + this.state.email);
      return this.setState({ error: true });
    } else {
      Auth.authenticate();
      console.log('Login Function ' + Auth.getAuth());
      const { history } = this.props;
      history.push('/dashboard');
    }
  };
  render() {
    //const { email, password, error } = this.state;
    const error = this.state.error;
    console.log('Error = ' + error);
    const errorPrint = () => {
      if (error) {
        return (
          <MDBContainer>
            <MDBAlert color='warning' dismiss>
              <strong>login Failed</strong>! Incorrect email id or password
            </MDBAlert>
          </MDBContainer>
        );
      }
    };

    return (
      <MDBContainer>
        <MDBRow>
          {errorPrint()}
          <MDBCol md='6'>
            <form onSubmit={this.login}>
              <p className='h5 text-center mb-4'> Sign in </p>{' '}
              <div className='grey-text'>
                <MDBInput
                  label='Type your email'
                  icon='envelope'
                  group
                  name='email'
                  type='email'
                  validate
                  error='wrong'
                  value={this.email}
                  onChange={this.handleInputChange}
                  success='right'
                />
                <MDBInput
                  label='Type your password'
                  icon='lock'
                  group
                  name='password'
                  value={this.password}
                  type='password'
                  validate
                  onChange={this.handleInputChange}
                />
              </div>
              <div className='text-center'>
                <MDBBtn type='submit'> Login </MDBBtn>
                <MDBBtn onClick={this.test}> Test </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default withRouter(Signin);
