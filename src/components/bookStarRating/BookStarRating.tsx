import React from 'react';
import { ReactComponent as BookArrow } from '../../assets/img/book_arrow.svg';
import starArray from '../../const/starArray';
import starOutline from '../../assets/img/catalog_rating_star_outline.svg';
import StyledBookStarRating from './BookStarRating.style';
import BookStar from '../bookStar/BookStar';

const BookStarRating: React.FC = () => {
  const [rate, setRate] = React.useState<number>(0);
  
  const onClickHandler = (rateCount: number) => {
    setRate(rateCount);
  };
  return (
    <StyledBookStarRating>
      <div className="book-rating__stars">
        {starArray.map((item) => {
          const rateLevel = item > rate ? 0 : 100;
          return (
            <BookStar
              key={item}
              rateLevel={rateLevel}
              rateCount={item}
              onClickHandler={onClickHandler}
            />
          );
        })}
      </div>
      <button className="book-rating__button">
        <BookArrow className="book-rating__arrow" />
        <span className="book-rating__text">Rate this book</span>
      </button>
    </StyledBookStarRating>
  );
};

export default BookStarRating;
