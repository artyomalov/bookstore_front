import React from 'react';
import StyledHeaderCartItemsCounter from './HeaderCartItemsCounter.style';
import { selectCartItemsLength } from '../../store/selectors';
import { useAppSelector } from '../../store/typedHooks';

const HeaderCartItemsCounter: React.FC = () => {
  const cartItemsListLenth = useAppSelector(selectCartItemsLength);
  return cartItemsListLenth > 0 ? (
    <StyledHeaderCartItemsCounter display="block">
      {cartItemsListLenth > 9 ? '9+' : cartItemsListLenth}
    </StyledHeaderCartItemsCounter>
  ) : null;
};

export default HeaderCartItemsCounter;
