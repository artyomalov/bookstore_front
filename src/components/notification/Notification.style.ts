import styled from 'styled-components';

type StyledProps = {
  notificationtype: string;
};

const StyledNotification = styled.div<StyledProps>`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0px;
  z-index: 999;
  .notification__message {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: ${(props) => props.theme.widthFor1440};
    height: 100px;
    margin: 10px auto 5px auto;
    background-color: ${(props) => props.notificationtype};
    position: relative;
    transition: ${(props) => props.theme.transitionStyle};
    border-radius: ${(props) => props.theme.borderRadius};
    font-size: ${(props) => props.theme.fontSize22};
    font-weight: ${(props) => props.theme.fontWeightMedium};
  }
`;

export default StyledNotification;
