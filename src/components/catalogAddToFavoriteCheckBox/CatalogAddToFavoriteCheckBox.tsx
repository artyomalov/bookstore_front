import React from 'react';
import likeIcon from '../../assets/img/user_liked.svg';
import StyledAddToFavoriteButton from './CatalogAddToFavoriteCheckBox.style';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import { selectLikedList, selectUserEmail } from '../../store/selectors';
import { useLocation, useNavigate } from 'react-router';
import { addToLiked } from '../../store/userStaffSlice';

type Props = {
  slug: string;
};

const CatalogAddToFavoriteCheckBox: React.FC<Props> = (props) => {
  const likedList = useAppSelector(selectLikedList);
  const userEmail = useAppSelector(selectUserEmail);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const isLikedIndex = userEmail
    ? likedList.findIndex((liked) => liked.slug === props.slug)
    : -1;
  const isLiked = isLikedIndex === -1 ? false : true;

  const setFavoriteHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (userEmail === 'not set') {
      navigate('/auth/login', { state: { location: location } });
      return;
    }
    await dispatch(
      addToLiked({
        bookSlug: props.slug,
        inList: e.target.checked,
      })
    );
  };

  return (
    <StyledAddToFavoriteButton selected={isLiked ? 'selected' : ''}>
      <input
        className="catalog-book-item__like-checkbox"
        type="checkbox"
        onChange={setFavoriteHandler}
        checked={isLiked}
      />
      <img
        src={likeIcon}
        alt="userLikedIcon"
        className="catalog-book-item__like-icon"
      />
    </StyledAddToFavoriteButton>
  );
};

export default CatalogAddToFavoriteCheckBox;
