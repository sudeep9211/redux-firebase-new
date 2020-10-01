import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import firebase from '../config/firebase';
import { withRouter } from 'react-router-dom';
class Signup extends Component {
  state = {
    email: '',
    password: '',
    error: null,
  };
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({
          error: error,
        });
      });
  };
  render() {
    // const { email, password, error } = this.state;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <form onSubmit={this.handleSubmit}>
              <p className='h5 text-center mb-4'>Sign up</p>
              <div className='grey-text'>
                <MDBInput
                  label='Your name'
                  icon='user'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  label='Your email'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  value={this.email}
                  success='right'
                  onChange={this.handleInputChange}
                />
                <MDBInput
                  label='Your password'
                  icon='lock'
                  group
                  type='password'
                  validate
                  value={this.password}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className='text-center'>
                <MDBBtn color='primary'>Register</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default withRouter(Signup);
