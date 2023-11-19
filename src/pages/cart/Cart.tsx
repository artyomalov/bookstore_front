import React from 'react';
import UserStaffEmpty from '../../components/userStaffEmpty/UserStaffEmpty';
import StyledCart from './Cart.style';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import CartItemList from '../../components/cartItemList/CartItemList';
import { Link } from 'react-router-dom';
import { getUserCart } from '../../store/userStaffSlice';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();

  const userCart = useAppSelector((state) => state.userStaff.userCart);
  const cartTotalCount = useAppSelector(
    (state) => state.userStaff.cartTotalCount
  );
  return (
    <StyledCart>
      {userCart.length === 0 ? (
        <UserStaffEmpty
          staff="cart"
          text1="Add items to cart to make a purchase."
          text2="Also you can go to the catalogue."
        />
      ) : (
        <>
          <CartItemList cart={userCart} />
          <h3 className="cart__total">
            Total <span className="cart__total-amount">{cartTotalCount}</span>
          </h3>
          <div className="cart__buttons-container">
            <Link to="/" className="cart__continue-shopping">
              Continue shopping
            </Link>
            <button className="cart__checkout">Checkout</button>
          </div>
        </>
      )}
    </StyledCart>
  );
};

export default Cart;
