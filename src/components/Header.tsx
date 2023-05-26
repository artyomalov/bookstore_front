import React from 'react';
import { Link } from 'react-router-dom';
import header_logo from '../assets/img/header_logo.svg';
import header_seach from '../assets/img/header_search.svg'
import StyledHeader from './Header.style';

const Header: React.FC = () => {
  const [searchInputData, setSearchInputData] = React.useState('');

  const onInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputData(e.target.value);
  };

  return (
    <StyledHeader>
      <img className="header__logo" src={header_logo} alt="header__logo" />
      <Link className="header__catalog" to="/">
        Catalog
      </Link>
      <div className='header__input-container'>
       <img src={header_seach}/>
       <input
          className="header__input"
          onChange={onInputHandler}
          placeholder="search"
        />
      </div>
      <div className="header__auth-container">
        <Link className='header__auth-link' to="login">Log in/</Link>
        <Link className='header__auth-link' to="signup">Sign Up</Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
