import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/img/header_logo.svg';
import headerSearch from '../../assets/img/header_search.svg';
import LoginSignUpButton from '../loginSignUpButton/LoginSignUpButton';
import StyledHeader from './Header.style';
const Header: React.FC = () => {
  const [searchInputData, setSearchInputData] = React.useState('');

  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputData(e.target.value);
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
      <LoginSignUpButton />
    </StyledHeader>
  );
};

export default Header;
