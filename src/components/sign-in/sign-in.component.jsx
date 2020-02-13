import React from 'react';
import './sign-in.style.scss';

import FormInput from '../form-input/form-input.component';

export default class SingIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({emai: '', password: ''});
  }

  handlOnChange = e => {
    const {value, name} = e.target;

    this.setState({[name]: value});
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='Email'
            name='email'
            type='email'
            handleChange={this.handlOnChange}
            value={this.state.email}
            required
            />
          <FormInput
            label='Password'
            name='password'
            type='password'
            handleChange={this.handlOnChange}
            value={this.state.password}
            required
            />
          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}