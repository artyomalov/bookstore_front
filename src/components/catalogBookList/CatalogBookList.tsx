import React from 'react';
import StyledCatalogBookList from './CatalogBookList.style';
import CatalogBookItem from '../catalogBookItem/CatalogBookItem';
import { BookType } from '../../types/bookTypes';

type Props = {
  serverRequestCallback: () => Promise<BookType[] | undefined>;
};

const CatalogBookList: React.FC<Props> = (props) => {
  const [booksList, setBooksList] = React.useState<BookType[] | null>(null);
  React.useEffect(() => {
    (async () => {
      const booksList = await props.serverRequestCallback();
      if (booksList) setBooksList(booksList);
    })();
  }, [props.serverRequestCallback]);

  return (
    <StyledCatalogBookList>
      {booksList !== null ? (
        booksList.map((book) => (
          <div key={book.id} className="catalog-book-list__book-item-container">
            <CatalogBookItem {...book} />
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </StyledCatalogBookList>
  );
};

export default CatalogBookList;
