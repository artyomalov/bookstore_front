import React from 'react';
import StyledPurchaseItem from './PurchaseItem.style';
import { PurchaseItemType } from '../../types/userStaffTypes';
import mediaBaseUrl from '../../const/mediaBaseUrl';
import CatalogAuthorsList from '../catalogAuthorsList/CatalogAuthorsList';
import cartItemDelete from '../../assets/img/cart_item_delete.svg';
import { useAppDispatch } from '../../store/typedHooks';
import { Link } from 'react-router-dom';

const PurchaseItem: React.FC<PurchaseItemType> = React.memo((props) => {
  return (
    <StyledPurchaseItem>
      <Link to={`/book/${props.slug}`}>
        <img
          className="purchase-item__book-cover"
          src={mediaBaseUrl + props.coverImage}
          alt={props.coverImage}
        />
      </Link>
      <div className="purchase-item__data-container">
        <h2 className="purchase-item__book-title">{props.title}</h2>
        <CatalogAuthorsList
          authors={props.authors}
          width="167px"
          height="38px"
          fontSize="24px"
          fontWeight={500}
          color="#0D1821"
        />
        <p className="purchase-item__quantity">Quantity: {props.quantity}</p>
        <p className="purchase-item__price">${props.price}USD</p>
      </div>
    </StyledPurchaseItem>
  );
});

export default PurchaseItem;
