import React from 'react';
import StyledFavorite from './Liked.style';
import UserStaffEmpty from '../../components/userStaffEmpty/UserStaffEmpty';
import { selectIsLikedItemsExist } from '../../store/selectors';
import UserStaffLikedList from '../../components/userStaffLikedList/UserStaffLikedList';
import ConditionalRenderServiceComponent from '../../serviceComponents/ConditionalRenderServiceComponent';

const Favorite: React.FC = () => {
  return (
    <StyledFavorite>
      <ConditionalRenderServiceComponent
        getStateCallback={selectIsLikedItemsExist}
      >
        <UserStaffLikedList />
        <UserStaffEmpty
          title="You haven't got liked books"
          text1="Add books to favoririte to keep them for the future."
          text2="Also you can go to the catalogue."
        />
      </ConditionalRenderServiceComponent>
    </StyledFavorite>
  );
};

export default Favorite;
