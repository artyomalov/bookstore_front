import styled from 'styled-components';

type StyledFilterSortByType = {
  showchoiceslist: string;
};

const StyledFilterSortBy = styled.div<StyledFilterSortByType>`
  position: relative;
  .sort-by__filter-list-container {
    width: 197px;
    height: ${(props) => props.showchoiceslist};
    overflow: hidden;
    position: absolute;
    top: 44px;
    transition: ${(props) => props.theme.transitionStyle};
  }
`;

export default StyledFilterSortBy;
