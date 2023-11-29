import styled from 'styled-components';

type StyledProps = {
  selected: string;
};

const StyledCatalogPaginationCircle = styled.div<StyledProps>`
  border: 2px solid ${(props) => props.theme.colorDark};
  width: 13.33px;
  height: 13.33px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected === 'selected' ? props.theme.colorDark : 'none'};
  transition: ${(props) => props.theme.transitionStyle};
  &:hover {
    background-color: ${(props) => props.theme.colorDark};
  }
`;

export default StyledCatalogPaginationCircle;
