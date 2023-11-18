import React from 'react';
import UserStaffEmpty from '../../components/userStaffEmpty/UserStaffEmpty';
import StyledCart from './Cart.style';
import { useAppSelector } from '../../store/typedHooks';
import CartItemList from '../../components/cartItemList/CartItemList';

const Cart: React.FC = () => {
  const userCart = useAppSelector((state) => state.userStaff.userCart);
  return (
    <StyledCart>
      {userCart.length === 0 ? (
        <UserStaffEmpty
          staff="cart"
          text1="Add items to cart to make a purchase."
          text2="Also you can go to the catalogue."
        />
      ) : (
        <CartItemList cart={userCart} />
      )}
    </StyledCart>
  );
};

export default Cart;
