import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/img/header_logo.svg';
import headerSearch from '../../assets/img/header_search.svg';
import userCart from '../../assets/img/user_cart.svg';
import userProfile from '../../assets/img/user_profile.svg';
import userLiked from '../../assets/img/user_liked.svg';
import userExit from '../../assets/img/user_exit.svg';
import { useAppDispatch } from '../../store/typedHooks';
import { setUserUnauthrized } from '../../store/userSlice';
import StyledHeader from './Header.style';

const HeaderAuthorized: React.FC = () => {
  const [searchInputData, setSearchInputData] = React.useState('');
  const dispatch = useAppDispatch();
  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputData(e.target.value);
  };

  const exitUserProfileButtonClickHandler = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    dispatch(setUserUnauthrized(''));
  };

  return (
    <StyledHeader>
      <div className="header__link-input-container">
        <Link className="header__logo" to="/">
          <img src={headerLogo} alt="header__logo" />
        </Link>
        <div className="header__catalog-link-input-container">
          <Link className="header__catalog" to="/">
            Catalog
          </Link>
          <div className="header__input-container">
            <img src={headerSearch} />
            <input
              className="header__input"
              onChange={onInputHandler}
              placeholder="search"
              value={searchInputData}
            />
          </div>
        </div>
      </div>
      <div className="header__user-container">
        <Link className="header__user-button" to="cart">
          <img src={userCart} alt="user_cart" />
        </Link>
        <Link className="header__user-button" to="liked">
          <img src={userLiked} alt="user_liked" />
        </Link>
        <Link className="header__user-button" to="profile">
          <img src={userProfile} alt="user_profile" />
        </Link>
        <Link
          className="header__user-button"
          to=""
          onClick={exitUserProfileButtonClickHandler}
        >
          <img src={userExit} alt="user_exit" />
        </Link>
      </div>
    </StyledHeader>
  );
};

export default HeaderAuthorized;
