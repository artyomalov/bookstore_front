import React from 'react';
import StyledSearch from './Search.style';
import CatalogBookList from '../../components/catalogBookList/CatalogBookList';
import bookRequersts from '../../api/bookAPI/bookRequests';
import { useLocation } from 'react-router';
import UserStaffEmpty from '../../components/userStaffEmpty/UserStaffEmpty';
import { useAppDispatch } from '../../store/typedHooks';
import { showNotification } from '../../store/notificationSlice';
import { notificationType } from '../../types/notificationTypes';

const Search: React.FC = () => {
  // console.log('render');

  const [booksFound, setBooksFound] = React.useState<boolean>(true);
  const dispatch = useAppDispatch();
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
        dispatch(
          showNotification({
            isVisible: true,
            text: "Sorry, this book diesn't exist",
            type: notificationType.Warn,
          })
        );
        setBooksFound(false);
      }
      return response.data;
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
          title="We coudn't find this book, sorry."
          text1="Please check the spelling of your request and try again"
          text2="Also you can go to the catalogue."
        />
      )}
    </StyledSearch>
  );
};

export default Search;
