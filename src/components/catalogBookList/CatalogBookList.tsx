import React from 'react';
import StyledCatalogBookList from './CatalogBookList.style';
import CatalogBookItem from '../catalogBookItem/CatalogBookItem';
import { GetBooksResponseType } from '../../types/bookTypes';
import CatalogPagination from '../catalogPagination/CatalogPagination';
import { showNotification } from '../../store/notificationSlice';
import { useAppDispatch } from '../../store/typedHooks';
import GridLoader from 'react-spinners/GridLoader';
import { createRange } from '../../services/usePagination';
import { notificationType } from '../../types/notificationTypes';

type Props = {
  serverRequestCallback: (
    page: number
  ) => Promise<GetBooksResponseType | undefined>;
};

const CatalogBookList: React.FC<Props> = (props) => {
  const [responseData, setResponseData] =
    React.useState<GetBooksResponseType | null>(null);
  const dispatch = useAppDispatch();
  const [page, setPage] = React.useState<number>(1);
  React.useEffect(() => {
    (async () => {
      try {
        const data = await props.serverRequestCallback(page);
        if (data !== undefined) {
          setResponseData(data);
        }
      } catch (error) {
        dispatch(
          showNotification({
            isVisible: true,
            text: 'Internal server error. Please reload the page.',
            type: notificationType.Error,
          })
        );
        console.log(error);
      }
    })();
  }, [page]);

  return (
    <StyledCatalogBookList>
      {responseData !== null ? (
        <>
          <div className="catalog-book-list__books-container">
            {responseData.books.map((book) => (
              <div
                key={book.id}
                className="catalog-book-list__book-item-container"
              >
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
        </>
      ) : (
        <div className="catalog-book-list__books-container">
          {createRange(1, 4).map((item) => (
            <GridLoader
              key={item}
              color="#344966"
              loading={true}
              cssOverride={{
                display: 'block',
                margin: '38px 50px 132px 50px',
                borderColor: '#344966',
              }}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
              speedMultiplier={0.4}
            />
          ))}
        </div>
      )}
    </StyledCatalogBookList>
  );
};

export default CatalogBookList;
