import styled from 'styled-components';

const StyledStarRating = styled.div`
  width: 299px;
  height: 27px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .catalog-star-rating__stars-container {
    display: flex;
    width: 250px;
    height: 26px;
    justify-content: space-between;
    align-items: center;
  }
  .catalog-star-rating__rate-count {
    color: ${(props) => props.theme.colorDarkGray};
    font-size: ${(props) => props.theme.fontSize16};
    font-weight: ${(props) => props.theme.fontWeightMedium};
  }
`;
export default StyledStarRating;
