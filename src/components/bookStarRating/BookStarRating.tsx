import React from 'react';
import { ReactComponent as BookArrow } from '../../assets/img/book_arrow.svg';
import starArray from '../../const/starArray';
import starOutline from '../../assets/img/catalog_rating_star_outline.svg';
import StyledBookStarRating from './BookStarRating.style';

const BookStarRating: React.FC = () => {
  return (
    <StyledBookStarRating>
      <div className="book-rating__stars">
        {starArray.map((item) => {
          return (
            <div className="book-rating__star" key={item}>
              <img
                src={starOutline}
                alt="outlined star"
                className="book-rating__star-outline"
              />
            </div>
          );
        })}
      </div>
      <button className="book-rating__button">
        <BookArrow className='book-rating__arrow' /> <span className='book-rating__text'>Rate this book</span>
      </button>
    </StyledBookStarRating>
  );
};

export default BookStarRating;
