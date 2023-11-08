import React from 'react';
import StyledCommentsList from './bookCommentsList.style';
import { CommentType } from '../../types/bookTypes';
import BookComment from '../bookComment/BookComment';

type Props = {
  comments: CommentType[];
};

const BookCommentsList: React.FC<Props> = (props) => {
  return (
    <StyledCommentsList>
      {props.comments.map((comment) => {
        return (
          <BookComment
            key={comment.id}
            userName={comment.userName}
            userAvatar={comment.userAvatar}
            createdAt={comment.createdAt}
            text={comment.text}
          />
        );
      })}
    </StyledCommentsList>
  );
};

export default BookCommentsList;
