import React from 'react';
import StyledCatalogBookList from './CatalogBookList.style';
import CatalogBookItem from '../catalogBookItem/CatalogBookItem';
import { GetBooksResponseType } from '../../types/bookTypes';
import CatalogPagination from '../catalogPagination/CatalogPagination';

type Props = {
  serverRequestCallback: (
    page: number
  ) => Promise<GetBooksResponseType | undefined>;
};

const CatalogBookList: React.FC<Props> = (props) => {
  // console.log('render_catalog_list');
  const [responseData, setResponseData] =
    React.useState<GetBooksResponseType | null>(null);
  const [page, setPage] = React.useState<number>(1);
  React.useEffect(() => {
    (async () => {
      try {
        const data = await props.serverRequestCallback(page);
        if (data !== undefined) {
          setResponseData(data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);

  return responseData !== null ? (
    <StyledCatalogBookList>
      <div className="catalog-book-list__books-container">
        {responseData.books.map((book) => (
          <div key={book.id} className="catalog-book-list__book-item-container">
            <CatalogBookItem {...book} />
          </div>
        ))}
      </div>
      {responseData.pagesCount === 1 ? null : (
        <CatalogPagination
          paginationData={{
            pagesCount: responseData.pagesCount,
            hasNext: responseData.hasNext,
            hasPrevious: responseData.hasPrevious,
          }}
          page={page}
          setPage={setPage}
        />
      )}
    </StyledCatalogBookList>
  ) : (
    <h1>Loading...</h1>
  );
};

export default CatalogBookList;
