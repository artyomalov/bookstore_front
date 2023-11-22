import React from 'react';
import StyledCartItemList from './CartItemList.style';
import { CartItemType } from '../../types/userStaffTypes';
import CartItem from '../cartItem/CartItem';
import { useAppSelector } from '../../store/typedHooks';
import { selectUserCartItemsList } from '../../store/selectors';

const CartItemList: React.FC = () => {
  const userCart = useAppSelector(selectUserCartItemsList);

  return (
    <StyledCartItemList>
      {userCart.map((cartItem) => {
        return <CartItem key={cartItem.id} {...cartItem} />;
      })}
    </StyledCartItemList>
  );
};

export default CartItemList;
