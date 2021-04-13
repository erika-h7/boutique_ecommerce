import React from 'react';

// Components
import CustomButton from '../custom-button/custom-button.components';

// Styles
import './cart-dropdown.styles.scss';

const Cart = () => (
    <div className='cart-dropdown'>

        <div className='cart-items'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    
    </div>
);

export default Cart;