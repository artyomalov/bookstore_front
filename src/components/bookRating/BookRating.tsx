import React from 'react';
import StyledBookRating from './BookRating.style';
import starFill from '../../assets/img/catalog_rating_star_fill.svg';
import BookStarRating from '../bookStarRating/BookStarRating';
import bookRequersts from '../../api/bookAPI/bookRequests';
import { selectUserId } from '../../store/selectors';
import { useAppSelector } from '../../store/typedHooks';

type Props = {
  bookId: number;
};

const BookRating: React.FC<Props> = (props) => {
  const [averageRating, setAverageRating] = React.useState<number>(0);
  const previosRateRef = React.useRef<number>(0);
  React.useEffect(() => {
    (async () => {
      try {
        const response = await bookRequersts.getTotalRate(props.bookId);
        setAverageRating(response.data.averageRating);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [props.bookId]);

  const userId = useAppSelector(selectUserId);
  const onClickRateButtonHandler = async (newRate: number) => {
    try {
      if (newRate === previosRateRef.current) return;
      const response = await bookRequersts.addRate(
        newRate,
        userId,
        props.bookId
      );
      setAverageRating(response.data.averageRate);
      previosRateRef.current = newRate;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledBookRating>
      <div className="book-rating__rate-count">
        <img
          src={starFill}
          alt="star image"
          className="book-rating__star-image"
        />
        <span className="book-ratin__rate-count">
          {averageRating.toFixed(1)}
        </span>
      </div>
      <BookStarRating onClickRateHandler={onClickRateButtonHandler} />
    </StyledBookRating>
  );
};

export default BookRating;
