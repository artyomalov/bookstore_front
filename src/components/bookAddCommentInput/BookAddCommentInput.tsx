import React from 'react';
import StyledBookAddCommentInput from './BookAddCommentInput.style';

type Props = {
  onClickPostButtonHandler: (commntText: string) => Promise<void>;
};

const BookAddCommentInput: React.FC<Props> = (props) => {
  const [text, setText] = React.useState<string>('');
  const onInputHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const onClickPostButtonHandler = () => {
    props.onClickPostButtonHandler(text);
    setText('');
  };
  return (
    <StyledBookAddCommentInput>
      <textarea
        className="comment-input__textarea"
        placeholder="Share a comment"
        onChange={onInputHandler}
        value={text}
      ></textarea>
      <button
        className="comment-input__button"
        onClick={onClickPostButtonHandler}
      >
        Post a comment
      </button>
    </StyledBookAddCommentInput>
  );
};

export default BookAddCommentInput;
