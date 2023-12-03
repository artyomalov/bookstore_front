import styled from 'styled-components';
import starMask from '../../assets/img/catalog_rating_star_mask.svg';
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

  .book-rating__star {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: yellow;
    mask-image: url(${starMask});
    -webkit-mask-image: url(${starMask});
    mask-position: center;
    -webkit-mask-position: center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    position: relative;
    width: 30px;
    height: 30px;
  }

  .book-rating__star-outline {
  }

  .book-rating__star-fill {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: green;
    top: 0;
    left: -00%;
    z-index: -1;
  }

  .book-rating__button {
    width: 146px;
    height: 24px;
    border: none;
    background: none;
    cursor: pointer;
  }

  .book-rating__text {
    font-size: ${(props) => props.theme.fontSize16};
    font-weight: ${(props) => props.theme.fontWeightMedium};
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
