import React from 'react';
import StyledMainPage from './Catalog.style';
import Banner from '../../components/catalogBanner/CatalogBanner';
import banner from '../../assets/img/banner.svg';
import FilterCatalogHeader from '../../components/filterCatalogHeader/FilterCatalogHeader';
const Catalog: React.FC = () => {
  return (
    <StyledMainPage>
      <Banner
        imageLink={banner}
        imageAlt="banner"
        titleText="Build your library with us"
        sloganText="Buy two books and get one for free"
        buttonText="Choose a book"
      />
      <FilterCatalogHeader />
    </StyledMainPage>
  );
};

export default Catalog;
