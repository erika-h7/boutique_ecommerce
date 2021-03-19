import React from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// assets
import { ReactComponent as Logo } from '../../assets/crown.svg'

// firebase
import { auth } from '../../firebase/firebase.utils';

// styles
import './header.styles.scss';

// functional component
const Header = ({ currentUser }) => (
    <div className="header">

        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>

        <div className="options">

            <Link className="option hvr-sweep-to-right" to="/shop">
                SHOP
            </Link>

            <Link className="option hvr-sweep-to-right" to="/shop">
                CONTACT
            </Link>

            {
                currentUser ?
                <div className="option sign-out hvr-wobble-to-top-right" onClick={() => auth.signOut()}> SIGN OUT</div>
                :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
        </div>


    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);