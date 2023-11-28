import React from 'react';
import StyledSearch from './Search.style';
import CatalogBookList from '../../components/catalogBookList/CatalogBookList';
import bookRequersts from '../../api/bookAPI/bookRequests';
import { useLocation } from 'react-router';
import UserStaffEmpty from '../../components/userStaffEmpty/UserStaffEmpty';

const Search: React.FC = () => {
  // console.log('render');

  const [booksFound, setBooksFound] = React.useState<boolean>(true);
  const location = useLocation();
  const ref = React.useRef<string>(location.state);
  if (ref.current !== location.state) {
    setBooksFound(true);
    ref.current = location.state;
  }
  const serverRequestCallback = async (page: number) => {
    try {
      const response = await bookRequersts.searchBooks(ref.current, page);
      if (response.data.books.length === 0) {
        setBooksFound(false);
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledSearch>
      {booksFound ? (
        <>
          <h1>Search</h1>
          <CatalogBookList serverRequestCallback={serverRequestCallback} />
        </>
      ) : (
        <UserStaffEmpty
          staff="search"
          text1="We coudn't find this book, sorry."
          text2="Please try again."
        />
      )}
    </StyledSearch>
  );
};

export default Search;
