import React from 'react';
import StyledCommentsList from './bookCommentsList.style';
import { CommentType } from '../../types/bookTypes';
import BookComment from '../bookComment/BookComment';

type Props = {
  commentsList: CommentType[];
};

const BookCommentsList: React.FC<Props> = (props) => {
  return (
    <StyledCommentsList>
      {props.commentsList.length === 0 ? (
        <h2>Nobody has't comment this book yet, but you can be the first</h2>
      ) : (
        props.commentsList.map((comment) => (
          <BookComment key={comment.id} {...comment} />
        ))
      )}
    </StyledCommentsList>
  );
};

export default BookCommentsList;
