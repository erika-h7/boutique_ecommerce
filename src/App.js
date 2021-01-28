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

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/shop" component={ ShopPage }/>
      <Route exact path="/signin" component={ SignInAndSignUpPage }/>

    </Switch>
    </div>
  );
}

export default App;
