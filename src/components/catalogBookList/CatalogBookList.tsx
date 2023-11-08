import React from 'react';
import StyledCatalogBookList from './CatalogBookList.style';
import { useAppSelector } from '../../store/typedHooks';
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
          <CatalogBookItem
            key={book.id}
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
        );
      })}
    </StyledCatalogBookList>
  );
};

export default CatalogBookList;
