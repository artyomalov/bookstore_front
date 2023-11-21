import React from 'react';
import StyledCLikedItem from './LikedItem.style';
import { UserLikedType } from '../../types/userStaffTypes';
import mediaBaseUrl from '../../const/mediaBaseUrl';
import CatalogAuthorsList from '../catalogAuthorsList/CatalogAuthorsList';
import cartItemDelete from '../../assets/img/cart_item_delete.svg';
import { useAppDispatch } from '../../store/typedHooks';
import { addToLiked, updateUserCart } from '../../store/userStaffSlice';

const LikedItem: React.FC<UserLikedType> = (props) => {
  const dispatch = useAppDispatch();

  const removeFromLikedHandler = async () => {
    dispatch(
      addToLiked({
        bookSlug: props.slug,
        inList: false,
      })
    );
  };

  return (
    <StyledCLikedItem>
      <img
        className="liked-item__book-cover"
        src={mediaBaseUrl + props.coverImage}
        alt={props.coverImage}
      />
      <div className="liked-item__data-container">
        <h2 className="liked-item__book-title">{props.title}</h2>
        <CatalogAuthorsList
          authors={props.authors}
          width="167px"
          height="38px"
          fontSize="24px"
          fontWeight={500}
          color="#0D1821"
        />
        <img
          src={cartItemDelete}
          alt="delete button"
          className="liked-item__delete-button"
          onClick={removeFromLikedHandler}
        />
        <p className="liked-item__price">${props.hardcoverPrice}USD</p>
      </div>
    </StyledCLikedItem>
  );
};

export default LikedItem;
