import React from 'react';
import likeIcon from '../../assets/img/user_liked.svg';
import StyledAddToFavoriteButton from './CatalogAddToFavoriteCheckBox.style';

type Props = {
  onClickHandler: (inList: boolean) => void;
  checked: boolean;
};

const CatalogAddToFavoriteCheckBox: React.FC<Props> = (props) => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(props.checked);

  const setFavoriteHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onClickHandler(e.target.checked);
    setIsFavorite(e.target.checked);
  };

  return (
    <StyledAddToFavoriteButton selected={isFavorite ? 'selected' : ''}>
      <input
        className="catalog-book-item__like-checkbox"
        type="checkbox"
        onChange={setFavoriteHandler}
        checked={isFavorite}
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
