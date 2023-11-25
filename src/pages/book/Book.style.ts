import styled from 'styled-components';

const StyledBook = styled.main`
  width: ${(props) => props.theme.mainWidth};
  margin: 0 auto;
  /* position: relative; */
  .book__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 60px;
  }
  .book__img-container {
    width: 522px;
    height: 779px;
    position: relative;
  }
  .book__cover-image {
    width: 522px;
    height: 779px;
  }
  .book__liked-container {
    position: absolute;
    width: 59px;
    height: 59px;
    top: 30px;
    right: 30px;
  }
  .book__data {
    /* background-color: red; */
    width: 50%;
  }
  .book__title {
    font-size: ${(props) => props.theme.fontSize44};
    font-weight: ${(props) => props.theme.fontWeightBold};
  }

  .book__add-to-cart-button-container-paperback,
  .book__add-to-cart-button-container-hardcover {
    height: 50px;
  }
  .book__add-to-cart-button-container-paperback {
    width: 243px;
  }
  .book__add-to-cart-button-container-hardcover {
    width: 216px;
  }

  .book__rating {
    margin-top: 30px;
  }

  .book__description {
    margin-top: 30px;
    color: ${(props) => props.theme.colorDarkBlue};
    font-size: ${(props) => props.theme.fontSize16};
    font-weight: ${(props) => props.theme.fontWeightNormal};
  }
  .book__add-to-cart-container {
    display: flex;
    width: 100%;
    margin-top: 74px;
    justify-content: flex-start;
    align-items: center;
  }
  .book__button-container {
    margin-right: 82px;
  }
  .book__button-title {
    margin-bottom: 14px;
    font-size: ${(props) => props.theme.fontSize16};
    font-weight: ${(props) => props.theme.fontWeightThin};
    color: ${(props) => props.theme.colorDarkBlue};
  }

  .book__comments {
    margin-top: 110px;
  }

  .book__recommendations-title {
    font-size: ${(props) => props.theme.fontSize44};
    font-weight: ${(props) => props.theme.fontWeightBold};
    margin-top: 110px;
    margin-bottom: 50px;

  }
`;

export default StyledBook;
