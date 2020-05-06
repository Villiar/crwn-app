import React from 'react';
import Custombutton from '../custom-button/CustomButton';
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      <Custombutton>GO TO CHECKOUT</Custombutton>
    </div>
  </div>
);
export default CartDropdown;
