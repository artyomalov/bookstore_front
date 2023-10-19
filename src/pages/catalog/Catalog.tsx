import React from 'react';
import StyledMainPage from './Catalog.style';
import Banner from '../../components/banner/Banner';
import banner from '../../assets/img/banner.svg';
import CatalogHeader from '../../components/catalogHeader/CatalogHeader';
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
      <CatalogHeader />
    </StyledMainPage>
  );
};

export default Catalog;
