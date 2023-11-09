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
  .book__cover-image {
    width: 522px;
    height: 779px;
  }
  .book__data {
    /* background-color: red; */
    width: 50%;
  }
  .book__title {
    font-size: ${(props) => props.theme.fontSizeBig};
    font-weight: ${(props) => props.theme.fontWeightBold};
  }
  .book__rating {
    margin-top: 30px;
  }

  .book__description {
    margin-top: 30px;
    color: ${(props) => props.theme.colorDarkBlue};
    font-size: ${(props) => props.theme.fontSizeSmall};
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
    font-size: ${(props) => props.theme.fontSizeSmall};
    font-weight: ${(props) => props.theme.fontWeightThin};
    color: ${(props) => props.theme.colorDarkBlue};
  }

  .book__comments {
    margin-top: 110px;
  }
  .book__comments-title {
    font-size: ${(props) => props.theme.fontSizeBig};
    font-weight: ${(props) => props.theme.fontWeightBold};
    margin-bottom: 50px;
    }
`;

export default StyledBook;
