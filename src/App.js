import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {setCurrentUser} from './redux/user/user.action'
import {selectCurrentUser} from './redux/user/user.selectors'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import Header from './components/header/header.component';
import HomePage from './page/home-page/home-page.component';
import ShopPage from './page/shop-page/shop-page.component';
import SignInAndSignUp from './page/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import CheckoutPage from './page/checkout-page/checkout-page.component';
import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  };

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.authSubscriber = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
              id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth);
      }
      // this.setState({currentUser: user});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
