import styled from 'styled-components';

const StyledCatalogBookItem = styled.div`
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
  .catalog-book-item__add-to-cart-container {
    margin-top: 30px;
  }
`;

export default StyledCatalogBookItem;
