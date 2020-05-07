import React from 'react';
import { connect } from 'react-redux';
import Custombutton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <Custombutton>GO TO CHECKOUT</Custombutton>
  </div>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CartDropdown);
