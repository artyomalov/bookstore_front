import styled from 'styled-components';

const StyledBookRating = styled.div`
  width: 504px;
  height: 30px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .book-rating__rate-count {
    display: flex;
    width: 68px;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .book-rating__star-image {
    width: 30px;
    height: 30px;
  }
  .book-ratin__rate-count {
    font-size: ${(props) => props.theme.fontSizeSmall};
    font-weight: ${(props) => props.theme.fontWeightNormal};
    color: ${(props) => props.theme.colorDarkGray};
  }
`;

export default StyledBookRating;
