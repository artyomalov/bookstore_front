import styled from 'styled-components';

type StyledProps = {
  selected: string;
};

const StyledCatalogBookItem = styled.div<StyledProps>`
  width: 305px;
  height: 663px;
  position: relative;
  .catalog-book-item__single-page-link {
    position: relative;
    width: 100%;
    height: 448px;
    cursor: pointer;
  }
  .catalog-book-item__image {
  }
  .catalog-book-item__book-title {
    margin-top: 30px;
    font-size: ${(props) => props.theme.fontSizeNormal};
    font-weight: ${(props) => props.theme.fontWeightNormal};
    overflow: hidden;
    white-space: nowrap;
  }
  .catalog-book-item__author {
    font-size: ${(props) => props.theme.fontSizeNormal};
    font-weight: ${(props) => props.theme.fontWeightNormal};
    color: ${(props) => props.theme.colorDarkGray};
  }
  .catalog-book-item__like-item {
    width: 48px;
    height: 48px;
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    transition: ${(props) => props.theme.transitionStyle};
    opacity: ${(props) => (props.selected === 'selected' ? 1 : 0)};
  }
  &:hover .catalog-book-item__like-item {
    opacity: ${(props) => (props.selected === 'selected' ? 1 : 0.5)};
  }
  .catalog-book-item__like-checkbox {
    display: none;
  }
`;

export default StyledCatalogBookItem;
