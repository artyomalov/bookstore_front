import React from 'react';
import CatalogBookList from '../catalogBookList/CatalogBookList';
import bookRequersts from '../../api/bookAPI/bookRequests';
import { useAppSelector } from '../../store/typedHooks';
import { selectFilters } from '../../store/selectors';

const Catalog: React.FC = () => {
  const filtersData = useAppSelector(selectFilters);
  const serverRequestCallback = React.useCallback(
    async (page: number) => {
      try {
        const response = await bookRequersts.getBooks({ ...filtersData }, page);
        console.log(response)
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    [filtersData]
  );
  return (
    <>
      <CatalogBookList serverRequestCallback={serverRequestCallback} />
    </>
  );
};

export default Catalog;
