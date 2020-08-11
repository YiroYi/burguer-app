import React,  { Component } from 'react';

class Auth extends Component {
  state = {
    controls: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            placeholder: 'Mail address'
          },
          value: '',
          validation: {
            required: true,
            isEmail: true
          },
          valid: false,
          touched: false
        }
      }
  render() {
    return {
      <div>
      </div>
    }
  }
}

export default Auth;
