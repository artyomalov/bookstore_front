import React from 'react';
import StyledUserStaffLikedList from './UserStaffLikedList.style';
import { useAppSelector } from '../../store/typedHooks';
import { selectLikedList } from '../../store/selectors';
import LikedItem from '../userStaffLikedItem/LikedItem';

const UserStaffLikedList: React.FC = () => {
  const likedList = useAppSelector(selectLikedList);
  return (
    <StyledUserStaffLikedList>
      {likedList.map((likedItem) => (
        <LikedItem key={likedItem.id} {...likedItem} />
      ))}
    </StyledUserStaffLikedList>
  );
};

export default UserStaffLikedList;
