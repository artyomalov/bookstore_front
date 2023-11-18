import React from 'react';
import StyledCatalogBookList from './CatalogBookList.style';
import CatalogBookItem from '../catalogBookItem/CatalogBookItem';
import { BookType } from '../../types/bookTypes';

type Props = {
  books: BookType[];
};

const CatalogBookList: React.FC<Props> = (props) => {
  return (
    <StyledCatalogBookList>
      {props.books.map((book) => {
        return (
          <div key={book.id} className="catalog-book-list__book-item-container">
            <CatalogBookItem
              slug={book.slug}
              title={book.title}
              paperbackPrice={book.paperbackPrice}
              hardcoverPrice={book.hardcoverPrice}
              paperbackQuantity={book.hardcoverQuantity}
              hardcoverQuantity={book.hardcoverQuantity}
              coverImage={book.coverImage}
              createdAt={book.createdAt}
              rating={book.rating}
              salesCount={book.salesCount}
              authors={book.authors}
            />
          </div>
        );
      })}
    </StyledCatalogBookList>
  );
};

export default CatalogBookList;
