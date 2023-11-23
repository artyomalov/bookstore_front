import React from 'react';
import StyledCatalogBannerSecondary from './CatalogBannerSecondary.style';
import catalogBannerSecondaryImage from '../../assets/img/catalog_banner_secondary_image.svg';
import catalogBannerSecondaryBackground from '../../assets/img/catalog_banner_secondary_background.svg';
import LoginSignUpButton from '../headerLoginSignUpButton/HeaderLoginSignUpButton';

const CatalogBannerSecondary: React.FC = () => {
  return (
    <StyledCatalogBannerSecondary>
      <img
        src={catalogBannerSecondaryBackground}
        alt="catalog-banner-secondary__background"
        className="catalog-banner-secondary__background"
      />
      <img
        src={catalogBannerSecondaryImage}
        alt="catalog-banner-secondary__image"
        className="catalog-banner-secondary__image"
      />
      <div className="catalog-banner-secondary__text-container">
        <h2 className="catalog-banner-secondary__title">Authorize now</h2>
        <p className="catalog-banner-secondary">
          Authorize now and discover the fabulous world of books
        </p>
        <LoginSignUpButton />
      </div>
    </StyledCatalogBannerSecondary>
  );
};

export default CatalogBannerSecondary;
