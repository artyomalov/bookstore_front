import styled from 'styled-components';

const StyledCLikedItem = styled.div`
  width: 100%;
  height: 289px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 80px;
  &:last-of-type {
    margin-bottom: 0px;
  }
  .liked-item__book-cover {
    width: 197px;
    height: 100%;
  }
  .liked-item__data-container {
    height: 100%;
    margin-left: 20px;
  }
  .liked-item__book-title {
    font-size: ${(props) => props.theme.fontSize40};
    font-weight: ${(props) => props.theme.fontWeightBold};
  }
  .liked-item__delete-button {
    width: 20px;
    height: 20px;
    margin-top: 50px;
    cursor: pointer;
  }
  .liked-item__price {
    margin-top: 50px;
    font-size: ${(props) => props.theme.fontSize36};
    font-weight: ${(props) => props.theme.fontWeightMedium};
    color: ${(props) => props.theme.colorDark};
  }
`;

export default StyledCLikedItem;
