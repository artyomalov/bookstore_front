import styled from 'styled-components';

const StyledBookComment = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
  padding: 30px;
  width: 100%;
  min-height: 140px;
  background-color: ${(props) => props.theme.colorLight};
  border-radius: ${(props) => props.theme.borderRadius};
  .comment__user-avater {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .comment__data {
    margin-left: 20px;
  }
  .comment__user-name {
    font-size: ${(props) => props.theme.fontSizeSmall};
    font-weight: ${(props) => props.theme.fontWeightSemiBold};
  }
  .comment__left-comment-time {
    font-size: 12px;
    font-weight: ${(props) => props.theme.fontWeightNormal};
    color: ${(props) => props.theme.colorDarkGray};
  }
  .comment__comment-text {
    font-size: ${(props) => props.theme.fontSizeSmall};
    font-weight: ${(props) => props.theme.fontWeightNormal};
    color: ${(props) => props.theme.colorDarkBlue};
  }
`;

export default StyledBookComment;
