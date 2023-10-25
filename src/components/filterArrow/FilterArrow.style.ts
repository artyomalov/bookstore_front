import styled from 'styled-components';

const StyledFilterArrow = styled.span`
  display: block;
  position: relative;
  width: 15px;
  height: 15px;
  top: 5px;
  left: 20px;
  border: 20px solid transparent;
  border-bottom: 15px solid ${(props) => props.theme.colorLight};
`;

export default StyledFilterArrow;
