import React from 'react';
import { useAppSelector } from '../../store/typedHooks';
import { userCartTotalCount } from '../../store/selectors';
import StyledCartItemTotalCount from './CartItemTotalCount.style';

const CartItemTotalCount = () => {
  const cartTotalCount = useAppSelector(userCartTotalCount);

  return (
    <StyledCartItemTotalCount>
      Total{' '}
      <span className="cart__total-amount">{cartTotalCount.toFixed(2)}</span>
    </StyledCartItemTotalCount>
  );
};

export default CartItemTotalCount;
