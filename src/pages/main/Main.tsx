import React from 'react';
import StyledMainPage from './Main.style';
import Banner from '../../components/catalogBanner/CatalogBanner';
import banner from '../../assets/img/banner.svg';
import FilterCatalogHeader from '../../components/filterCatalogHeader/FilterCatalogHeader';
import CatalogBannerSecondary from '../../components/catalogBannerSecondary/CatalogBannerSecondary';
import { useAppSelector } from '../../store/typedHooks';
import { selectIfUserExists } from '../../store/selectors';
import Catalog from '../../components/catalog/Catalog';

const Main: React.FC = () => {
  const ifUserExists = useAppSelector(selectIfUserExists);
  // const books = useAppSelector(selectBooksList);

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
      <Catalog />
      {ifUserExists ? null : <CatalogBannerSecondary />}
    </StyledMainPage>
  );
};

export default Main;
