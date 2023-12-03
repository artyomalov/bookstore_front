import React from 'react';
import StyledNotification from './Notification.style';
import { selectNotificationData } from '../../store/selectors';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import { hideNotification } from '../../store/notificationSlice';

const Notification: React.FC = () => {
  const notificationData = useAppSelector(selectNotificationData);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    setTimeout(() => dispatch(hideNotification()), 1500);
  }, [notificationData, dispatch]);

  return notificationData.isVisible ? (
    <StyledNotification notificationtype={notificationData.type}>
      <div className="notification__message">{notificationData.text}</div>
    </StyledNotification>
  ) : null;
};

export default Notification;
