import React from 'react';
import StyledFoundBooks from './FoundBooks.style';
import CatalogBookList from '../../components/catalogBookList/CatalogBookList';

const FoundBooks: React.FC = () => {
  return (
    <StyledFoundBooks>
      <CatalogBookList books={[]} />
    </StyledFoundBooks>
  );
};

export default FoundBooks;
