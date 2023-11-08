import React from 'react';
import StyledCatalogAddToCartButton from './CatalogAddToCartButton.style';

type Props = {
  price: null | number;
  width: string;
  height: string;
};

const CatalogAddToCartButton: React.FC<Props> = (props) => {
  return (
    <StyledCatalogAddToCartButton
      isavalible={props.price === null ? 'Not avalible' : 'avalible'}
      width={props.width}
      height={props.height}
    >
      {props.price === null ? 'Not avalible' : `$${props.price} USD`}
    </StyledCatalogAddToCartButton>
  );
};

export default CatalogAddToCartButton;
