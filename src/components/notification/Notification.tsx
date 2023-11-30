import React from 'react';
import StyledNotification from './Notification.style';
import { selectNotificationData } from '../../store/selectors';
import { useAppSelector } from '../../store/typedHooks';

const Notification: React.FC = () => {
  const notificationData = useAppSelector(selectNotificationData);

  return notificationData.isVisible ? (
    <StyledNotification>{notificationData.text}</StyledNotification>
  ) : null;
};

export default Notification;
