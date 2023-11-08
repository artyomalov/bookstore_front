import styled from 'styled-components';
import StyledCatalogBookItem from '../catalogBookItem/CatalogBookItem.style';
type StyledProps = {
  selected: string;
};

const StyledAddToFavoriteButton = styled.label<StyledProps>`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  transition: ${(props) => props.theme.transitionStyle};
  opacity: ${(props) => (props.selected === 'selected' ? 1 : 0)};

  ${StyledCatalogBookItem}:hover & {
    opacity: ${(props) => (props.selected === 'selected' ? 1 : 0.5)};
  }
  .catalog-book-item__like-checkbox {
    display: none;
  }
`;

export default StyledAddToFavoriteButton;
