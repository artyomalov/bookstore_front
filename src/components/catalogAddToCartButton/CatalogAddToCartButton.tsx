import React from 'react';
import StyledCatalogAddToCartButton from './CatalogAddToCartButton.style';
import { useAppSelector } from '../../store/typedHooks';
import { selectUserCartItemsList } from '../../store/selectors';

type Props = {
  price: number;
  onClickHandler: (coverType: string, price: number) => void;
  coverType: string;
  bookSlug: string;
};

const CatalogAddToCartButton: React.FC<Props> = (props) => {
  const cartItemsList = useAppSelector(selectUserCartItemsList);
  const cartItemIndexIfExists = cartItemsList.findIndex((cartItem) => {
    return (
      cartItem.slug === props.bookSlug && cartItem.coverType === props.coverType
    );
  });
  const [cartItemExists, setCartItemExists] = React.useState<boolean>(
    cartItemIndexIfExists === -1 ? false : true
  );

  const onClickAddToTheCartHandler = () => {
    props.onClickHandler(props.coverType, props.price);
    setCartItemExists(true);
  };

  return cartItemExists ? (
    <StyledCatalogAddToCartButton isavalible="Not avalible">
      Added to cart
    </StyledCatalogAddToCartButton>
  ) : (
    <StyledCatalogAddToCartButton
      isavalible={props.price === -1 ? 'Not avalible' : 'avalible'}
      onClick={onClickAddToTheCartHandler}
    >
      {props.price === -1 ? 'Not avalible' : `$${props.price} USD`}
    </StyledCatalogAddToCartButton>
  );
};

export default CatalogAddToCartButton;
