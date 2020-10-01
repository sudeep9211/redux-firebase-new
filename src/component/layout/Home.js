import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';
// import { MDBBtn } from 'mdbreact';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
  }

  //   change = () => {
  //     // let name = this.state.name;
  //     // let id = this.state.id;
  //     // let branch = this.state.branch;
  //     this.setState({
  //       name: 'rakesh',
  //       id: 9887,
  //       branch: 'ME',
  //     });
  //   };
  //   changeTwo = () => {
  //     this.setState({
  //       name: 'Takesh',
  //       id: 218,
  //       branch: 'EC',
  //     });
  //   };
  render() {
    const log = this.state.login ? <h3>Home</h3> : <h3>Logout</h3>;
    return (
      <>
        {log}
        {/* variant='outline-success'
          onClick={this.change}
          onDoubleClick={this.changeTwo}>
          Success
        </Button> */}
      </>
    );
  }
}

export default Home;
