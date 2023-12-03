import React from 'react';
import UserStaffEmpty from '../../components/userStaffEmpty/UserStaffEmpty';
import StyledCart from './Cart.style';
import CartItemList from '../../components/userStaffCartItemList/UserStaffCartItemList';
import { Link } from 'react-router-dom';
import CartItemTotalCount from '../../components/userStaffCartItemTotalCount/UserStaffCartItemTotalCount';
import { useAppDispatch } from '../../store/typedHooks';
import { selectIsCartItemsExist } from '../../store/selectors';
import ConditionalRenderServiceComponent from '../../serviceComponents/ConditionalRenderServiceComponent';
import { purchaseBooks } from '../../store/userStaffSlice';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const buyBooksHandler = async () => {
    await dispatch(purchaseBooks());
  };

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
            <button className="cart__checkout" onClick={buyBooksHandler}>
              Checkout
            </button>
          </div>
        </>
        <UserStaffEmpty
          title="Your cart is empty"
          text1="Add items to cart to make a purchase."
          text2="Also you can go to the catalogue."
        />
      </ConditionalRenderServiceComponent>
    </StyledCart>
  );
};

export default Cart;
