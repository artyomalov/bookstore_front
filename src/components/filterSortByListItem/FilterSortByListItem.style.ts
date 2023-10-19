import styled from 'styled-components';

const StyledSortByFilterListItem = styled.li`
  list-style: none;
  cursor: pointer;
  color: ${(props) => props.theme.colorDarkGray};
  font-size: ${(props) => props.theme.fontSizeSmall};
  transition: ${(props) => props.theme.transitionStyle};

  &:hover {
    color: ${(props) => props.theme.colorDarkBlue};
    cursor: pointer;
  }
  &:first-of-type {
    margin-top: 16px;
  }
  &:last-of-type {
    margin-bottom: 16px;
  }
`;

export default StyledSortByFilterListItem;
