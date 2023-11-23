import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/img/header_logo.svg';
import HeaderLoginSignUpButton from '../headerLoginSignUpButton/HeaderLoginSignUpButton';
import StyledHeader from './Header.style';
import HeaderSearchField from '../headerSearchField/HeaderSearchField';
import ConditionalRenderServiceComponent from '../../serviceComponents/ConditionalRenderServiceComponent';
import HeaderUserStaffLinks from '../headerUserStaffLinks/HeaderUserStaffLinks';
import { selectIfUserExists } from '../../store/selectors';
const Header: React.FC = () => {
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
            <HeaderSearchField />
          </div>
        </div>
      </div>
      <ConditionalRenderServiceComponent getStateCallback={selectIfUserExists}>
        <HeaderUserStaffLinks />
        <HeaderLoginSignUpButton />
      </ConditionalRenderServiceComponent>
    </StyledHeader>
  );
};

export default Header;
