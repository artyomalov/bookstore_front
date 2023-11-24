import styled from 'styled-components';

const StyledStyledBookComments = styled.ul`
  min-width: 738px;
  list-style: none;
  .comment-list__comment-input-container {
    width: 738px;
    min-height: 139px;
    margin-top: 60px;
  }
  .comment-list-title {
    font-size: ${(props) => props.theme.fontSize44};
    font-weight: ${(props) => props.theme.fontWeightBold};
    margin-bottom: 50px;
  }
`;
export default StyledStyledBookComments;
