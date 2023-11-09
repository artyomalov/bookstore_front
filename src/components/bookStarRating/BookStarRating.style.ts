import styled from 'styled-components';

const StyledBookStarRating = styled.div`
  width: 396px;

  &,
  .book-rating__stars,
  .book-rating__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .book-rating__stars {
    width: 210px;
    height: 30px;
  }
  .book-rating__button {
    width: 146px;
    height: 24px;
    border: none;
    background: none;
    cursor: pointer;
  }

  .book-rating__text {
    font-size: ${(props) => props.theme.fontSizeSmall};
    font-weight: ${(props) => props.theme.fontWeightNormal};
    color: ${(props) => props.theme.colorDarkGray};
  }
  .book-rating__button:hover .book-rating__text {
    color: ${(props) => props.theme.colorDarkBlue};
    transition: ${(props) => props.theme.transitionStyle};
  }
  .book-rating__button:hover .book-rating__arrow * {
    stroke: ${(props) => props.theme.colorDarkBlue};
    transition: ${(props) => props.theme.transitionStyle};
  }
`;

export default StyledBookStarRating;
