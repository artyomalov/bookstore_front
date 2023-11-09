import React from 'react';
import StyledFavorite from './Favorite.style';
import UserStaffEmpty from '../../components/userStaffEmpty/UserStaffEmpty';

const Favorite: React.FC = () => {
  return (
    <StyledFavorite>
      <UserStaffEmpty
        staff="favorite"
        text1="Add items to favoririte to store them."
        text2="Also you can go to the catalogue."
      />
    </StyledFavorite>
  );
};

export default Favorite;
