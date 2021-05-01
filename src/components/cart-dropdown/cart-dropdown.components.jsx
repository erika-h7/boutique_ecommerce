import React from 'react';
import { connect } from 'react-redux';

// Components
import CustomButton from '../custom-button/custom-button.components';
import CartItem from '../cart-item/cart-item.components';

// Redux
import { selectCartItems } from '../../redux/cart/cart.selectors';

// Styles
import './cart-dropdown.styles.scss';

const Cart = ({ cartItems }) => (
    <div className='cart-dropdown'>

        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(Cart);