import styled from 'styled-components';

type StyledProps = {
  isavalible: string;
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
    font-size: ${(props) => props.theme.fontSize20};
    font-weight: ${(props) => props.theme.fontWeightMedium};
    overflow: hidden;
    white-space: nowrap;
  }
  .catalog-book-item__add-to-cart-container {
    margin-top: 30px;
  }

  .catalog-book-item__add-to-cart-link {
    display: block;
    width: 305px;
    height: 48px;
    background-color: ${(props) =>
      props.isavalible === 'avalible'
        ? props.theme.colorDarkBlue
        : props.theme.colorDarkGray};
    text-align: center;
    padding-top: 8.5px;
    text-decoration: none;
    color: ${(props) => props.theme.colorLight};
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    cursor: pointer;
    font-weight: ${(props) => props.theme.fontWeightThin};
    font-size: ${(props) => props.theme.fontSize20};
    &:hover {
      background-color: ${(props) => props.theme.colorDarkGray};
    }
    transition: ${(props) => props.theme.transitionStyle};
  }
  .catalog-book-item__add-to-favorite-container {
    width: 48px;
    height: 48px;
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;

export default StyledCatalogBookItem;
