import React from 'react';
import { Link } from 'react-router-dom';
import userCart from '../../assets/img/user_cart.svg';
import userProfile from '../../assets/img/user_profile.svg';
import userLiked from '../../assets/img/user_liked.svg';
import userExit from '../../assets/img/user_exit.svg';
import { setUserUnauthrized } from '../../store/userSlice';
import { useAppDispatch } from '../../store/typedHooks';
import StyledHeaderUserStaffLinks from './HeaderUserStaffLinks.style';

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
      <Link className="header__user-link" to="cart">
        <img src={userCart} alt="user_cart" />
      </Link>
      <Link className="header__user-link" to="liked ">
        <img src={userLiked} alt="user_liked" />
      </Link>
      <Link className="header__user-link" to="profile">
        <img src={userProfile} alt="user_profile" />
      </Link>
      <Link
        className="header__user-link"
        to=""
        onClick={exitUserProfileButtonClickHandler}
      >
        <img src={userExit} alt="user_exit" />
      </Link>
    </StyledHeaderUserStaffLinks>
  );
};

export default HeaderUserStaffLinks;
