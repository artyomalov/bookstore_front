import React from 'react';
import StyledBookRating from './BookRating.style';
import starFill from '../../assets/img/catalog_rating_star_fill.svg';
import BookStarRating from '../bookStarRating/BookStarRating';
import bookRequersts from '../../api/bookAPI/bookRequests';
import { selectUserId } from '../../store/selectors';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import { showNotification } from '../../store/notificationSlice';
import { notificationType } from '../../types/notificationTypes';

type Props = {
  bookId: number;
};

const BookRating: React.FC<Props> = (props) => {
  const [averageRating, setAverageRating] = React.useState<number>(0);
  const previosRateRef = React.useRef<number>(0);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    (async () => {
      try {
        const response = await bookRequersts.getTotalRate(props.bookId);
        setAverageRating(response.data.averageRating);
      } catch (error) {
        dispatch(
          showNotification({
            isVisible: true,
            text: 'Internal server error. Please reload the page.',
            type: notificationType.Error,
          })
        );
        console.log(error);
      }
    })();
  }, [props.bookId, dispatch]);

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
      dispatch(
        showNotification({
          isVisible: true,
          text: 'Thank you for your rate',
          type: notificationType.Sucsess,
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          isVisible: true,
          text: 'Internal server error. Please reload the page.',
          type: notificationType.Error,
        })
      );
      console.log(error);
    }
  };
  return (
    <StyledBookRating>
      <div className="book-rating__rate-count">
        <img src={starFill} alt="star" className="book-rating__star-image" />
        <span className="book-ratin__rate-count">
          {averageRating.toFixed(1)}
        </span>
      </div>
      <BookStarRating onClickRateHandler={onClickRateButtonHandler} />
    </StyledBookRating>
  );
};

export default BookRating;
