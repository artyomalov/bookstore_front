import React from 'react';
import StyledBookComment from './BookComment.style';
import mediaBaseUrl from '../../const/mediaBaseUrl';
import { dayInSeconds } from '../../const/timeConst';
import weekData from '../../const/weekData';
import { CommentType } from '../../types/bookTypes';
// type Props = {
//   userName: string;
//   userAvatar: string;
//   createdAt: string;
//   text: string;
// };

const getTimeFromCommentCreation = (createdAt: string) => {
  const timeFromCommentCreation = Math.round(
    (Date.now() - new Date(createdAt).getTime()) / 1000 / dayInSeconds
  );
  return timeFromCommentCreation;
};

const BookComment: React.FC<CommentType> = React.memo((props) => {
  console.log('render');
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
        src={`${mediaBaseUrl}${props.userData.userAvatar}`}
        alt={props.userData.userName}
        className="comment__user-avater"
      />
      <div className="comment__data">
        <h5 className="comment__user-name">{props.userData.userName}</h5>
        <p className="comment__left-comment-time">
          Left a comment {creationTimeText}
        </p>
        <p className="comment__comment-text">{props.text}</p>
      </div>
    </StyledBookComment>
  );
});

export default BookComment;
