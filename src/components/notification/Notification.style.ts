import styled from 'styled-components';

type StyledProps = {
  notificationtype: string;
};

const StyledNotification = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.theme.mainWidth};
  height: 50px;
  margin: 10px auto 5px auto;
  background-color: ${(props) => props.notificationtype};
  position: relative;
  transition: ${(props) => props.theme.transitionStyle};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export default StyledNotification;
