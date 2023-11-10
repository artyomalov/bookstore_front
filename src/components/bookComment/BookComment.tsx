import React from 'react';
import StyledBookComment from './BookComment.style';
import mediaBaseUrl from '../../const/mediaBaseUrl';
import { dayInSeconds } from '../../const/timeConst';
import weekData from '../../const/weekData';
type Props = {
  userName: string;
  userAvatar: string;
  createdAt: string;
  text: string;
};

const getTimeFromCommentCreation = (createdAt: string) => {
  const timeFromCommentCreation = Math.round(
    (Date.now() - new Date(createdAt).getTime()) / 1000 / dayInSeconds
  );
  return timeFromCommentCreation;
};

const BookComment: React.FC<Props> = (props) => {
  const timeFromCommentCreation = React.useMemo(
    () => getTimeFromCommentCreation(props.createdAt),
    [props.createdAt]
  );
  const selectIndexChoice =
    timeFromCommentCreation > weekData.length
      ? weekData.length - 1
      : timeFromCommentCreation;
  const creationTimeText = weekData[selectIndexChoice];

  return (
    <StyledBookComment>
      <img
        src={`${mediaBaseUrl}media/${props.userAvatar}`}
        alt={`${props.userName || 'somebody'}'s avatar`}
        className="comment__user-avater"
      />
      <div className="comment__data">
        <h5 className="comment__user-name">{props.userName || 'Somebody'}</h5>
        <p className="comment__left-comment-time">
          Left a comment {creationTimeText}
        </p>
        <p className="comment__comment-text">{props.text}</p>
      </div>
    </StyledBookComment>
  );
};

export default BookComment;
