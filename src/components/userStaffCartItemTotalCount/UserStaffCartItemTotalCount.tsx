import React from 'react';
import { useAppSelector } from '../../store/typedHooks';
import { selectUserCartTotalCount } from '../../store/selectors';
import StyledCartItemTotalCount from './UserStaffCartItemTotalCount';

const CartItemTotalCount = () => {
  const cartTotalCount = useAppSelector(selectUserCartTotalCount);

  return (
    <StyledCartItemTotalCount>
      Total{' '}
      <span className="cart__total-amount">{cartTotalCount.toFixed(2)}</span>
    </StyledCartItemTotalCount>
  );
};

export default CartItemTotalCount;

//Не надо добавлять услове в cartTotalCount в дальнейшем корзина не будет рендериться, если она пуста. Селекторы.