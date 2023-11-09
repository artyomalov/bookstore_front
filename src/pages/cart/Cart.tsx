import React from 'react';
import UserStaffEmpty from '../../components/userStaffEmpty/UserStaffEmpty';
import StyledCart from './Cart.style';

const Cart: React.FC = () => {
  return (
    <StyledCart>
      <UserStaffEmpty
        staff="cart"
        text1="Add items to cart to make a purchase."
        text2="Also you can go to the catalogue."
      />
    </StyledCart>
  );
};

export default Cart;
