import React from 'react';
import StyledMainPage from './Catalog.style';
import Banner from '../../components/catalogBanner/CatalogBanner';
import banner from '../../assets/img/banner.svg';
import FilterCatalogHeader from '../../components/filterCatalogHeader/FilterCatalogHeader';
import CatalogBannerSecondary from '../../components/catalogBannerSecondary/CatalogBannerSecondary';
import CatalogBookList from '../../components/catalogBookList/CatalogBookList';
import { useAppSelector } from '../../store/typedHooks';

const Catalog: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const isAuthorized = user.email === 'not set' ? false : true;

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
      <CatalogBookList />

      {isAuthorized ? null : <CatalogBannerSecondary />}
    </StyledMainPage>
  );
};

export default Catalog;
