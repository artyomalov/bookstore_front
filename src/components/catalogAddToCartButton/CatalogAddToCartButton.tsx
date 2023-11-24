import React from 'react';
import StyledCatalogAddToCartButton from './CatalogAddToCartButton.style';
import { Link } from 'react-router-dom';

type Props = {
  price: number;
  onClickHandler: (coverType: string, price: number) => void;
  coverType: string;
};

const CatalogAddToCartButton: React.FC<Props> = (props) => {
  return (
    <StyledCatalogAddToCartButton
      isavalible={props.price === -1 ? 'Not avalible' : 'avalible'}
      onClick={() => props.onClickHandler(props.coverType, props.price)}
    >
      {props.price === -1 ? 'Not avalible' : `$${props.price} USD`}
    </StyledCatalogAddToCartButton>
  );
};

export default CatalogAddToCartButton;
