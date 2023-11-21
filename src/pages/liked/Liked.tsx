import React from 'react';
import StyledFavorite from './Liked.style';
import UserStaffEmpty from '../../components/userStaffEmpty/UserStaffEmpty';
import { useAppSelector } from '../../store/typedHooks';
import { selectUserEmail } from '../../store/selectors';
import UserStaffLikedList from '../../components/userStaffLikedList/UserStaffLikedList';

const Favorite: React.FC = () => {
  const displayListFlag = true;

  return (
    <StyledFavorite>
      {displayListFlag ? (
        <UserStaffLikedList />
      ) : (
        <UserStaffEmpty
          staff="favorite"
          text1="Add items to favoririte to store them."
          text2="Also you can go to the catalogue."
        />
      )}
    </StyledFavorite>
  );
};

export default Favorite;
