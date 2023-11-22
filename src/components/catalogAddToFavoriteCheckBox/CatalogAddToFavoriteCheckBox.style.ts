import styled from 'styled-components';
import StyledCatalogBookItem from '../catalogBookItem/CatalogBookItem.style';
type StyledProps = {
  selected: string;
};

const StyledAddToFavoriteButton = styled.label<StyledProps>`
  width: 100%;
  height: 100%;

  cursor: pointer;
  transition: ${(props) => props.theme.transitionStyle};
  opacity: ${(props) => (props.selected === 'selected' ? 1 : 0.5)};
  z-index: 999;

  &:hover {
    opacity: 1;
  }

  .catalog-book-item__like-checkbox {
    display: none;
  }
`;

export default StyledAddToFavoriteButton;
