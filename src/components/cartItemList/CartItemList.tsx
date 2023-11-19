import React from 'react';
import StyledCartItemList from './CartItemList.style';
import { CartItemType } from '../../types/userStaffTypes';
import CartItem from '../cartItem/CartItem';

type Props = {
  cart: CartItemType[];
};

const CartItemList: React.FC<Props> = (props) => {
  console.log('render cartItemList');
  return (
    <StyledCartItemList>
      {props.cart.map((cartItem) => {
        return (
          <CartItem
            key={cartItem.id + Date.now() + Math.random() * 10}
            {...cartItem}
          />
        );
      })}
    </StyledCartItemList>
  );
};

export default CartItemList;
