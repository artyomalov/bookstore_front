import React from 'react';
import StyledMainPage from './Catalog.style';
import Banner from '../../components/catalogBanner/CatalogBanner';
import banner from '../../assets/img/banner.svg';
import FilterCatalogHeader from '../../components/filterCatalogHeader/FilterCatalogHeader';
import CatalogBannerSecondary from '../../components/catalogBannerSecondary/CatalogBannerSecondary';
import CatalogBookList from '../../components/catalogBookList/CatalogBookList';
import { useAppSelector } from '../../store/typedHooks';
import { selectBooksList, selectIfUserExists } from '../../store/selectors';
import bookRequersts from '../../api/bookAPI/bookRequests';

const Catalog: React.FC = () => {
  const ifUserExists = useAppSelector(selectIfUserExists);
  // const books = useAppSelector(selectBooksList);

  const serverRequestCallback = React.useCallback(async () => {
    try {
      const response = await bookRequersts.getBooks();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }, []);

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
      <CatalogBookList serverRequestCallback={serverRequestCallback} />

      {ifUserExists ? null : <CatalogBannerSecondary />}
    </StyledMainPage>
  );
};

export default Catalog;
