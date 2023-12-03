import React from 'react';
import { Link } from 'react-router-dom';
import userCart from '../../assets/img/user_cart.svg';
import userProfile from '../../assets/img/user_profile.svg';
import userLiked from '../../assets/img/user_liked.svg';
import userExit from '../../assets/img/user_exit.svg';
import { setUserUnauthrized } from '../../store/userSlice';
import { useAppDispatch } from '../../store/typedHooks';
import StyledHeaderUserStaffLinks from './HeaderUserStaffLinks.style';
import HeaderCartItemsCounter from '../headerCartItemsCounter/HeaderCartItemsCounter';

const HeaderUserStaffLinks: React.FC = () => {
  const dispatch = useAppDispatch();

  const exitUserProfileButtonClickHandler = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    dispatch(setUserUnauthrized(undefined));
    dispatch(setUserUnauthrized(''));
  };

  return (
    <StyledHeaderUserStaffLinks>
      <div className="header__cart-link-container">
        <Link className="header__user-link" to="cart">
          <img src={userCart} alt="user cart" />
        </Link>
        <div className="header__cart-items-counter-container">
          <HeaderCartItemsCounter />
        </div>
      </div>
      <Link className="header__user-link" to="liked ">
        <img src={userLiked} alt="user liked" />
      </Link>
      <Link className="header__user-link" to="profile">
        <img src={userProfile} alt="user profile" />
      </Link>
      <Link
        className="header__user-link"
        to=""
        onClick={exitUserProfileButtonClickHandler}
      >
        <img src={userExit} alt="user exit" />
      </Link>
    </StyledHeaderUserStaffLinks>
  );
};

export default HeaderUserStaffLinks;
