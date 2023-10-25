import styled from 'styled-components';

type StyledFilterPriceRangeType = {
  height: string;
};

const StyledFilterPriceRange = styled.div<StyledFilterPriceRangeType>`
  position: relative;

  .price-range__container {
    position: absolute;
    height: ${(props) => props.height};
    top: 44px;
    overflow: hidden;
    transition: ${(props) => props.theme.transitionStyle};
  }
`;

export default StyledFilterPriceRange;
