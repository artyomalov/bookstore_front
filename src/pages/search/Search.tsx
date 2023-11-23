import React from 'react';
import StyledSearch from './Search.style';
import CatalogBookList from '../../components/catalogBookList/CatalogBookList';
import bookRequersts from '../../api/bookAPI/bookRequests';
import { useLocation } from 'react-router';
import { BookType } from '../../types/bookTypes';
import UserStaffEmpty from '../../components/userStaffEmpty/UserStaffEmpty';

const Search: React.FC = () => {
  const [foundBooks, setFoundBooks] = React.useState<BookType[] | null>(null);
  const location = useLocation();
  console.log(location.state);
  React.useEffect(() => {
    (async () => {
      try {
        const response = await bookRequersts.searchBooks(location.state);
        setFoundBooks(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <StyledSearch>
      {foundBooks === null ? (
        <h1>Loading</h1>
      ) : foundBooks.length === 0 ? (
        <UserStaffEmpty
          staff="cart"
          text1="Add items to cart to make a purchase."
          text2="Also you can go to the catalogue."
        />
      ) : (
        <>
          <h1>Search</h1>
          <CatalogBookList books={foundBooks} />
        </>
      )}
    </StyledSearch>
  );
};

export default Search;
