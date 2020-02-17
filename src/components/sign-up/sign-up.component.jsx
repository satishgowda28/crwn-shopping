import React from 'react';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-up.style.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  handleSubmit = async event => {
    event.preventDefault();
    const {name, email, password, confirmPassword} = this.state;
    if(password !== confirmPassword) {
      alert('Password and Confirm Password does not match');
      return;
    }
    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName: name});
      this.setState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch(error) {
      console.log(error.message, 'Some Error occoured while creating a account');
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({[name]: value});
  }
  
  render() {
    const {name, email, password, confirmPassword} = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>Create a new Account</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='Name'
            name='name'
            type='text'
            handleChange={this.handleChange}
            value={name}
            required
          />
          <FormInput
            label='Email'
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={email}
            required
          />
          <FormInput
            label='Password'
            name='password'
            type='password'
            handleChange={this.handleChange}
            value={password}
            required
          />
          <FormInput
            label='Confirm Password'
            name='confirmPassword'
            type='password'
            handleChange={this.handleChange}
            value={confirmPassword}
            required
          />
          <CustomButton type='submit'>Register</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;