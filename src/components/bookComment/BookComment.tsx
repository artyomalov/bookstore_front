import React from 'react';
import StyledBookComment from './BookComment.style';
import mediaBaseUrl from '../../const/mediaBaseUrl';

type Props = {
  userName: string;
  userAvatar: string;
  createdAt: string;
  text: string;
};

const BookComment: React.FC<Props> = (props) => {
  console.log(props.createdAt);

  return (
    <StyledBookComment>
      <img
        src={`${mediaBaseUrl}media/${props.userAvatar}`}
        alt={`${props.userName || 'somebody'}'s avatar`}
        className="comment__user-avater"
      />
      <div className="comment__data">
        <h5 className="comment__user-name">{props.userName || 'Somebody'}</h5>
        <p className="comment__left-comment-time">Left a comment</p>
        <p className="comment__comment-text">{props.text}</p>
      </div>
    </StyledBookComment>
  );
};

export default BookComment;
