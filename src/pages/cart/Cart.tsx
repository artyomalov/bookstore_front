import React from 'react';
import UserStaffEmpty from '../../components/userStaffEmpty/UserStaffEmpty';
import StyledCart from './Cart.style';
import CartItemList from '../../components/cartItemList/CartItemList';
import { Link } from 'react-router-dom';
import CartItemTotalCount from '../../components/cartItemTotalCount/CartItemTotalCount';
import { useAppSelector } from '../../store/typedHooks';
import { selectIsCartItemsExist } from '../../store/selectors';
import ConditionalRenderServiceComponent from '../../serviceComponents/ConditionalRenderServiceComponent';
const Cart: React.FC = () => {
  return (
    <StyledCart>
      <ConditionalRenderServiceComponent
        getStateCallback={selectIsCartItemsExist}
      >
        <>
          <CartItemList />
          <CartItemTotalCount />
          <div className="cart__buttons-container">
            <Link to="/" className="cart__continue-shopping">
              Continue shopping
            </Link>
            <button className="cart__checkout">Checkout</button>
          </div>
        </>
        <UserStaffEmpty
          staff="cart"
          text1="Add items to cart to make a purchase."
          text2="Also you can go to the catalogue."
        />
      </ConditionalRenderServiceComponent>
    </StyledCart>
  );
};

export default Cart;
