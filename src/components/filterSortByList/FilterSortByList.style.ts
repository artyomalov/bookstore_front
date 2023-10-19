import styled from 'styled-components';

type StyledSortByListProps = {
  showchoiceslist: string;
};

const StyledSortByList = styled.ul<StyledSortByListProps>`
  width: 197px;
  height: ${(props) => props.showchoiceslist};
  background-color: ${(props) => props.theme.colorLight};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 15px;
  overflow: hidden;
  transition: ${(props) => props.theme.transitionStyle};
  position: absolute;
  border-radius: ${(props) => props.theme.borderRadius};
  top: 64px;
`;

export default StyledSortByList;
