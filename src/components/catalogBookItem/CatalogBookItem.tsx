import React from 'react';
import StyledCatalogBookItem from './CatalogBookItem.style';
import { AuthorType } from '../../types/bookTypes';
import CatalogAddToCartButton from '../catalogAddToCartButton/CatalogAddToCartButton';
import likeIcon from '../../assets/img/user_liked.svg';
import { Link } from 'react-router-dom';
import CatalogNewBestsellerIcon from '../catalogNewBestsellerIcon/CatalogNewBestsellerIcon';
type Props = {
  slug: string;
  title: string;
  hardcoverQuantity: number;
  paperbackQuantity: number;
  paperbackPrice: number;
  hardcoverPrice: number;
  coverImage: string;
  createdAt: string;
  salesCount: number;
  authors: AuthorType[];
};

const weekInSeconds = 604800;

const CatalogBookItem: React.FC<Props> = (props) => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

  let price: number | null = 0;
  if (props.hardcoverQuantity > 0) {
    price = props.hardcoverPrice;
  } else if (props.hardcoverQuantity === 0 && props.paperbackQuantity !== 0) {
    price = props.paperbackPrice;
  } else price = null;

  const isNewFlag =
    Math.round((Date.now() - new Date(props.createdAt).getTime()) / 1000) <
    weekInSeconds;
  const isBestsellerFlag = props.salesCount >= 20;

  const addToFavoriteHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFavorite(e.target.checked);
  };

  return (
    <StyledCatalogBookItem selected={isFavorite ? 'selected' : ''}>
      <Link
        to={`/${props.slug}`}
        state={{
          slug: props.slug,
          title: props.title,
          hardcoverQuantity: props.hardcoverQuantity,
          paperbackQuantity: props.paperbackQuantity,
          paperbackPrice: props.paperbackPrice,
          hardcoverPrice: props.hardcoverPrice,
          coverImage: props.coverImage,
          authors: props.authors,
        }}
        className="catalog-book-item__single-page-link"
      >
        <img
          className="catalog-book-item__image"
          src={`http://localhost:8000/${props.coverImage}`}
          alt={props.title}
        />
        {isNewFlag || isBestsellerFlag ? (
          <CatalogNewBestsellerIcon
            text={isBestsellerFlag ? 'Bestseller' : 'New'}
          />
        ) : null}
      </Link>
      <h4 className="catalog-book-item__book-title">{props.title}</h4>
      {props.authors.map((author) => (
        <p key={author.id} className="catalog-book-item__author">
          {author.name}
        </p>
      ))}
      <div className="catalog-book-item__rating">
        ??????????????????????????
      </div>
      <CatalogAddToCartButton price={price} />
      <label className="catalog-book-item__like-item">
        <input
          className="catalog-book-item__like-checkbox"
          type="checkbox"
          onChange={addToFavoriteHandler}
          checked={isFavorite}
        />
        <img
          src={likeIcon}
          alt="userLikedIcon"
          className="catalog-book-item__like-icon"
        />
      </label>
      <div className="catalog-book-item__new-tag">New</div>
      <div className="catalog-book-item__bestseller-tag">Bestseller</div>
    </StyledCatalogBookItem>
  );
};

export default CatalogBookItem;
