import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

// pages
import HomePage from './pages/homepage/homepage.components';
// import ShopPage from './pages/shop/shop.components.jsx';
import ShopPage from './pages/shop/shop.components.jsx';
import Header from './components/header/header.components.jsx';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
