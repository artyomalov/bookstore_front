import styled from 'styled-components';

const StyledNotification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.mainWidth};
  height: 50px;
  margin: 0 auto;
  background-color: #a8836d;
  position: relative;
  transition: ${(props) => props.theme.transitionStyle};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export default StyledNotification;
