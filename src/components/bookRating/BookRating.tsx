import React from 'react';
import StyledBookRating from './BookRating.style';
import starFill from '../../assets/img/catalog_rating_star_fill.svg';
import BookStarRating from '../bookStarRating/BookStarRating';
type Props = {
  rating: string;
};

const BookRating: React.FC<Props> = (props) => {
  return (
    <StyledBookRating>
      <div className="book-rating__rate-count">
        <img
          src={starFill}
          alt="star image"
          className="book-rating__star-image"
        />
        <span className="book-ratin__rate-count">{props.rating}</span>
      </div>
      <BookStarRating />
    </StyledBookRating>
  );
};

export default BookRating;
