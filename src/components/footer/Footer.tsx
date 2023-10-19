import React from 'react';
import styled from 'styled-components';
import headerLogo from '../../assets/img/header_logo.svg';
import { Link } from 'react-router-dom';
const StyledFooter = styled.div`
  width: 100%;
  /* height: 341px; */
  /* background-color: ${(props) => props.theme.colorDark}; */
  background-color: gray;
  margin-top: 110px;
  width: 100%;
  padding: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="footer__info-container">
        <img src={headerLogo} alt="header_logo" className="footer__logo" />
        <p className="footer__mail-to">
          <a href="mailto:tranthuy.nute@gmail.com">tranthuy.nute@gmail.com</a>
        </p>
        <p className="footer__phote-number">(480) 555-0103</p>
      </div>
      <div className="footer__links-container">
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/">Catalog</Link>
          </li>
          <li>
            <Link to="profile">My Account</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </div>
      <div className="footer__adress-container">
        <p className="footer__past-adress">
          6391 Elgin St. Celina, Delaware 10299
        </p>
        <div>
          ДОБАВИТЬ ГУГЛ МЭП КАРТУ
          https://developers.google.com/maps/documentation/javascript/react-map?hl=ru
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
