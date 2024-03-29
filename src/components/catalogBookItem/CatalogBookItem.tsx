import React from 'react';
import StyledCatalogBookItem from './CatalogBookItem.style';
import { AuthorType } from '../../types/bookTypes';
import { Link, useNavigate } from 'react-router-dom';
import CatalogAddToFavoriteCheckBox from '../catalogAddToFavoriteCheckBox/CatalogAddToFavoriteCheckBox';
import CatalogNewBestsellerIcon from '../catalogNewBestsellerIcon/CatalogNewBestsellerIcon';
import CatalogStarRating from '../catalogStarRating/CatalogStarRating';
import CatalogAuthorsList from '../catalogAuthorsList/CatalogAuthorsList';
import mediaBaseUrl from '../../const/mediaBaseUrl';
import { weekInSeconds } from '../../const/timeConst';

type Props = {
  id: number;
  slug: string;
  title: string;
  hardcoverQuantity: number;
  paperbackQuantity: number;
  paperbackPrice: number;
  hardcoverPrice: number;
  coverImage: string;
  createdAt: string;
  rating: number;
  salesCount: number;
  authors: AuthorType[];
};

const CatalogBookItem: React.FC<Props> = React.memo((props) => {
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

  return (
    <StyledCatalogBookItem
      isavalible={price === null ? 'not avalible' : 'avalible'}
    >
      <Link
        to={`/book/${props.slug}`}
        className="catalog-book-item__single-page-link"
        state={{ ...props }}
      >
        <img
          className="catalog-book-item__image"
          src={`${mediaBaseUrl}${props.coverImage}`}
          alt={props.title}
        />
        {isNewFlag || isBestsellerFlag ? (
          <CatalogNewBestsellerIcon
            text={isBestsellerFlag ? 'Bestseller' : 'New'}
          />
        ) : null}
      </Link>
      <h4 className="catalog-book-item__book-title">{props.title}</h4>
      <CatalogAuthorsList
        authors={props.authors}
        width="100%"
        height="30px"
        fontSize="20px"
        fontWeight={500}
        color="#B9BAC3"
      />
      <CatalogStarRating rating={props.rating} />
      <div className="catalog-book-item__add-to-cart-container">
        <Link
          className="catalog-book-item__add-to-cart-link"
          to={`/book/${props.slug}`}
          state={{ ...props }}
        >
          {price === null ? 'Not available' : props.hardcoverPrice}
        </Link>
      </div>
      <div className="catalog-book-item__add-to-favorite-container">
        <CatalogAddToFavoriteCheckBox slug={props.slug} />
      </div>
    </StyledCatalogBookItem>
  );
});

export default CatalogBookItem;
