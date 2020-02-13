import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import {auth} from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './page/home-page/home-page.component';
import ShopPage from './page/shop-page/shop-page.component';
import SignInAndSignUp from './page/sign-in-and-sign-up-page/sign-in-and-sign-up.component';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  };

  unsubscribeFromAuth = null

  componentDidMount() {
    this.authSubscriber = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
