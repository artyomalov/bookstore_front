import React from 'react';
import footerLogo from '../../assets/img/footer_logo.svg';
import { Link } from 'react-router-dom';
import StyledFooter from './Footer.style';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <div className="footer__container">
        <div className="footer__info-container">
          <Link to="/" className="footer__logo">
            <img
              src={footerLogo}
              alt="footer_logo"
              className="footer__logo-img"
            />
          </Link>
          <a className="footer__mail-to" href="mailto:tranthuy.nute@gmail.com">
            tranthuy.nute@gmail.com
          </a>
          <p className="footer__phone-number">(480) 555-0103</p>
        </div>
        <div className="footer__links-container">
          <nav className="footer__nav">
            <ul className="footer__nav-links-container">
              <li className="footer__nav-link-item">
                <Link className="footer__nav-link-item-link" to="/">
                  Home Page
                </Link>
              </li>
              <li className="footer__nav-link-item">
                <Link className="footer__nav-link-item-link" to="/">
                  Catalog
                </Link>
              </li>
              <li className="footer__nav-link-item">
                <Link className="footer__nav-link-item-link" to="profile">
                  My Account
                </Link>
              </li>
              <li className="footer__nav-link-item">
                <Link className="footer__nav-link-item-link" to="cart">
                  Cart
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__adress-container">
          <p className="footer__post-adress">
            6391 Elgin St. Celina, Delaware 10299
          </p>
          <div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A109e7da959b4fc3231e27202f4950ae2b013a4621443e1edf5fea7b9bd1efb75&amp;source=constructor"
              width="413 "
              height="160"
              className='footer__map'
            ></iframe>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
