import styled from 'styled-components';

const StyledFilterSortByList = styled.ul`
  background-color: ${(props) => props.theme.colorLight};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 15px;
  border-radius: ${(props) => props.theme.borderRadius};
`;

export default StyledFilterSortByList;
