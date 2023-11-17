import React from 'react';
import StyledCatalogBookItem from './CatalogBookItem.style';
import { AuthorType } from '../../types/bookTypes';
import CatalogAddToCartButton from '../catalogAddToCartButton/CatalogAddToCartButton';
import { Link } from 'react-router-dom';
import CatalogAddToFavoriteCheckBox from '../catalogAddToFavoriteCheckBox/CatalogAddToFavoriteCheckBox';
import CatalogNewBestsellerIcon from '../catalogNewBestsellerIcon/CatalogNewBestsellerIcon';
import CatalogStarRating from '../catalogStarRating/CatalogStarRating';
import CatalogAuthorsList from '../catalogAuthorsList/CatalogAuthorsList';
import mediaBaseUrl from '../../const/mediaBaseUrl';
import { weekInSeconds } from '../../const/timeConst';
import { addToLiked } from '../../store/userStaffSlice';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';

type Props = {
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

const CatalogBookItem: React.FC<Props> = (props) => {
  const [inCartItem, setInCartItem] = 
  const dispatch = useAppDispatch();
  const likedList = useAppSelector((state) => state.userStaff.userLiked);
  const cartItemsList = useAppSelector((state) => state.userStaff.userCart);

  const isLikedIndex = likedList.findIndex(
    (liked) => liked.slug === props.slug
  );
  const isLiked = isLikedIndex === -1 ? false : true;
  const cartItem = cartItemsList.find(
    (cartItem) => cartItem.slug === props.slug
  );
  if(cartItem){

  }

  let price: number | null = 0;
  if (props.hardcoverQuantity > 0) {
    price = props.hardcoverPrice;
  } else if (props.hardcoverQuantity === 0 && props.paperbackQuantity !== 0) {
    price = props.paperbackPrice;
  } else price = null;
  const userLikedId = useAppSelector((state) => state.user.user.userLikedId);
  const isNewFlag =
    Math.round((Date.now() - new Date(props.createdAt).getTime()) / 1000) <
    weekInSeconds;
  const isBestsellerFlag = props.salesCount >= 20;

  const addToFavoriteHandler = (inList: boolean) => {
    dispatch(
      addToLiked({
        id: userLikedId,
        bookSlug: props.slug,
        inList: inList,
      })
    );
  };

  return (
    <StyledCatalogBookItem>
      <Link
        to={`/${props.slug}`}
        className="catalog-book-item__single-page-link"
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
        <CatalogAddToCartButton price={price} width="100%" height="48px" />
      </div>
      <CatalogAddToFavoriteCheckBox
        onClickHandler={addToFavoriteHandler}
        checked={isLiked}
      />
    </StyledCatalogBookItem>
  );
};

export default CatalogBookItem;