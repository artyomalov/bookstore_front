import React from 'react';
import StyledCartItem from './CartItem.style';
import { CartItemType } from '../../types/userStaffTypes';
import mediaBaseUrl from '../../const/mediaBaseUrl';

const CartItem: React.FC<CartItemType> = (props) => {
  return (
    <StyledCartItem>
      <img src={mediaBaseUrl + props.coverImage} alt={props.coverImage} />
      <div className="cart-item__data-container">
        <h2 className="cart-item__book-title">{props.title}</h2>
        <p>authors</p>
        <div className="cart-item__actions-container">
          <div className="cart-item__quantity-actions-container">
            <span className="cart-item__quantity-control"></span>
            <span className="cart-item__quantity">{props.quantity}</span>
            <span className="cart-item__quantity-control"></span>
          </div>
          <img
            src=""
            alt="delete button"
            className="cart-item__delete-button"
          />
        </div>
        <p className="cart-item__price">{props.price}</p>
      </div>
    </StyledCartItem>
  );
};

export default CartItem;
