import React from 'react';
import StyledCartItem from './CartItem.style';
import { CartItemType } from '../../types/userStaffTypes';
import mediaBaseUrl from '../../const/mediaBaseUrl';
import CatalogAuthorsList from '../catalogAuthorsList/CatalogAuthorsList';
import cartItemDelete from '../../assets/img/cart_item_delete.svg';
import { useAppDispatch } from '../../store/typedHooks';
import {
  updateCartItemQuantity,
  updateUserCart,
} from '../../store/userStaffSlice';
import { showStandartErrorNotification } from '../../store/notificationSlice';

const CartItem: React.FC<CartItemType> = React.memo((props) => {
  const dispatch = useAppDispatch();
  const changeCartItemCount = async (increase: boolean) => {
    await dispatch(
      updateCartItemQuantity({ id: props.id, increase: increase })
    );
  };

  const deleteItemHandler = async () => {
    await dispatch(updateUserCart({ cartItemId: props.id }));
  };

  return (
    <StyledCartItem>
      <img
        className="cart-item__book-cover"
        src={mediaBaseUrl + props.coverImage}
        alt={props.coverImage}
      />
      <div className="cart-item__data-container">
        <h2 className="cart-item__book-title">{props.title}</h2>
        <CatalogAuthorsList
          authors={props.authors}
          width="167px"
          height="38px"
          fontSize="24px"
          fontWeight={500}
          color="#0D1821"
        />
        <div className="cart-item__actions-container">
          <div className="cart-item__quantity-actions-container">
            <div
              className="cart-item__quantity-control"
              onClick={() => changeCartItemCount(false)}
            >
              <span className="cart-item__quantity-minus"></span>
            </div>
            <span className="cart-item__quantity">{props.quantity}</span>
            <div
              className="cart-item__quantity-control"
              onClick={() => changeCartItemCount(true)}
            >
              <span className="cart-item__quantity-plus"></span>
              <span className="cart-item__quantity-plus"></span>
            </div>
          </div>
          <img
            src={cartItemDelete}
            alt="delete button"
            className="cart-item__delete-button"
            onClick={deleteItemHandler}
          />
        </div>
        <p className="cart-item__price">${props.price}USD</p>
      </div>
    </StyledCartItem>
  );
});

export default CartItem;
