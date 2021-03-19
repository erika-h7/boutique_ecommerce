import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

// Redux
import { connect } from 'react-redux';

// pages
import HomePage from './pages/homepage/homepage.components';
// import ShopPage from './pages/shop/shop.components.jsx';
import ShopPage from './pages/shop/shop.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.components';

// components
import Header from './components/header/header.components';

// user
import { setCurrentUser } from './redux/user/user.actions';

// firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// class component (so we can have access to state)
class App extends React.Component {

  unsuscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // if userAuth exist
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // check if our database has updated any new reference with any new data
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });

          //console.log(this.state);
        });

      } else {
        setCurrentUser( userAuth );
      }
    });
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
  }
  
  render() {
    return (
      <div>

      <Header />

      <Switch>

        <Route exact path="/" component={ HomePage }/>
        <Route exact path="/shop" component={ ShopPage }/>
        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}/>

      </Switch>

      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
