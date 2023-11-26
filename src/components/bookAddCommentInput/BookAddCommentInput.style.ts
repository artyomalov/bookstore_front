import styled from 'styled-components';

const StyledBookAddCommentInput = styled.div`
  width: 100%;
  height: 100%;
  .comment-input__textarea {
    width: 100%;
    min-height: 128px;
    padding: 20px 24px 20px 24px;

    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colorLight};
    color: ${(props) => props.theme.colorDark};
    font-size: ${(props) => props.theme.fontSize16};
    font-weight: ${(props) => props.theme.fontWeightThin};
    resize: none;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${(props) => props.theme.colorDarkGray};
    }
  }
  .comment-input__button {
    display: block;
    width: 276px;
    height: 50px;
    margin-top: 30px;
    background-color: ${(props) => props.theme.colorDarkBlue};
    color: ${(props) => props.theme.colorLight};
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    cursor: pointer;
    font-weight: ${(props) => props.theme.fontWeightThin};
    font-size: ${(props) => props.theme.fontSizeNormal};
    &:hover {
      background-color: ${(props) => props.theme.colorDarkGray};
    }
    transition: ${(props) => props.theme.transitionStyle};
  }
`;

export default StyledBookAddCommentInput;
