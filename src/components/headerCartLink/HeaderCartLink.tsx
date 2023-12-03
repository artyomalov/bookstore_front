import React from 'react';
import userCart from '../../assets/img/user_cart.svg';
import { Link } from 'react-router-dom';
import StyledHeaderCartLink from './HeaderCartLink.style';

const HeaderCartLink: React.FC = () => {


  return (
    <StyledHeaderCartLink >
      <Link className="cart-link__user-link" to="cart">
        <img src={userCart} alt="user_cart" />
      </Link>
      <div className="cart-link__cart-item-counter"></div>
    </StyledHeaderCartLink>
  );
};

export default HeaderCartLink;
