import React from 'react';
import StyledSearch from './Search.style';
import CatalogBookList from '../../components/catalogBookList/CatalogBookList';
import bookRequersts from '../../api/bookAPI/bookRequests';
import { useLocation } from 'react-router';
import UserStaffEmpty from '../../components/userStaffEmpty/UserStaffEmpty';

const Search: React.FC = () => {
  console.log('render search');
  const [booksFound, setBooksFound] = React.useState<boolean>(true);
  const location = useLocation();

  // React.useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await bookRequersts.searchBooks(location.state);
  //       setFoundBooks(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   })();
  // }, []);

  const serverRequestCallback = async () => {
    try {
      console.log('callback');
      const response = await bookRequersts.searchBooks(location.state);

      if (response.data.length === 0) setBooksFound(false);

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
