import React from 'react';
import StyledCatalogBookList from './CatalogBookList.style';
import { useAppSelector } from '../../store/typedHooks';
import CatalogBookItem from '../catalogBookItem/CatalogBookItem';

const CatalogBookList: React.FC = () => {
  const books = useAppSelector((state) => state.book.books);

  return (
    <StyledCatalogBookList>
      {books.map((book) => {
        return (
          <CatalogBookItem
            key={book.id}
            slug={book.slug}
            title={book.title}
            paperbackPrice={book.paperbackPrice}
            coverImage={book.coverImage}
            salesCount={book.salesCount}
            authors={book.authors}
          />
        );
      })}
    </StyledCatalogBookList>
  );
};

export default CatalogBookList;