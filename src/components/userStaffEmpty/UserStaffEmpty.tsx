import React from 'react';
import { Link } from 'react-router-dom';
import StyledEmpty from './UserStaffEmpty.style';
import userStaffEmpty from '../../assets/img/user_staff_empty.svg';
type Props = {
  title: string;
  text1: string;
  text2: string;
};

const UserStaffEmpty: React.FC<Props> = (props) => {
  return (
    <StyledEmpty>
      <img src={userStaffEmpty} alt="userStaffEmpty" className="empty__image" />
      <div className="empty__text-container">
        <h2 className="empty__title">{props.title}</h2>
        <p className="empty__text">{props.text1}</p>
        <p className="empty__text">{props.text2}</p>
        <Link to="/" className="empty__link">
          Go to catalog
        </Link>
      </div>
    </StyledEmpty>
  );
};

export default UserStaffEmpty;
