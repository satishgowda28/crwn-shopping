import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './page/home-page/home-page.component';
import ShopPage from './page/shop-page/shop-page.component';
import SignInAndSignUp from './page/sign-in-and-sign-up-page/sign-in-and-sign-up.component';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUp} />
    </Switch>
  </div>
)

export default App;
