import styled from 'styled-components';

const StyledCommentsList = styled.ul`
  width: 738px;
  list-style: none;
  .book-comments-list__title {
    font-size: ${(props) => props.theme.fontSize22};
    font-weight: ${(props) => props.theme.fontWeightNormal};
  }
`;
export default StyledCommentsList;
