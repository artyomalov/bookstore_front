import React from 'react';
import starOtline from '../../assets/img/catalog_rating_star_outline.svg';
import StyledBookStar from './BookStar.style';

type Props = {
  rateLevel: number;
  rateCount: number;
  onClickHandler: (rateCount: number) => void;
};

const BookStar: React.FC<Props> = (props) => {
  const rateLevelCalculated = props.rateLevel - 100;
  return (
    <StyledBookStar
      ratelevel={rateLevelCalculated}
      onClick={() => props.onClickHandler(props.rateCount)}
    >
      <div className="catalog-book-item__green-fill"></div>
      <img
        src={starOtline}
        alt="star_stroke"
        className="catalog-book-item__star-outline"
      />
      <div className="catalog-book-item__white-background"></div>
    </StyledBookStar>
  );
};

export default BookStar;
