import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

// pages
import HomePage from './pages/homepage/homepage.components';
// import ShopPage from './pages/shop/shop.components.jsx';
import ShopPage from './pages/shop/shop.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';

// components
import Header from './components/header/header.components';

// firebase
import { auth } from './firebase/firebase.utils';

// class component (so we can have access to state)
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsuscribeFromAuth = null;

  componentDidMount() {
    this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }
  
  render() {
    return (
      <div>

      <Header currentUser={this.state.currentUser} />

      <Switch>

        <Route exact path="/" component={ HomePage }/>
        <Route exact path="/shop" component={ ShopPage }/>
        <Route exact path="/signin" component={ SignInAndSignUpPage }/>

      </Switch>

      </div>
    );
  }

}

export default App;
