import React from 'react';
import './sign-in.style.scss';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signinWithGoogle} from '../../firebase/firebase.utils';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const {email, password} = this.state;
    try {
      const {user} = await auth.signInWithEmailAndPassword(email, password);
      await createUserProfileDocument(user);
    } catch(error) {
      console.log(error.message, 'Something went wrong while loggin in');
    }
    this.setState({email: '', password: ''});
  }

  handlOnChange = e => {
    const {value, name} = e.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
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
          <div className="buttons">
            <CustomButton type='submit'>
              Login
            </CustomButton>
            <CustomButton onClick={signinWithGoogle} isGoogleSingin>
              Login with GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}