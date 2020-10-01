import SweetAlert from 'react-bootstrap-sweetalert';
import React, { Component } from 'react';
class Sweetalert extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <SweetAlert
          warning
          showCancel
          confirmBtnText='Yes, delete it!'
          confirmBtnBsStyle='danger'
          title='Are you sure?'
          onConfirm={this.deleteFile}
          onCancel={this.onCancel}
          focusCancelBtn>
          You will not be able to recover this imaginary file!
        </SweetAlert>
      </>
    );
  }
}

export default Sweetalert;
