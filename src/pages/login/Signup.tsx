import React from 'react';
import AuthFormSignUp from '../../components/authForm/AuthFormSignUp';
import authImage from '../../assets/img/auth_image.svg';
import authMail from '../../assets/img/auth_mail.svg';
import authHide from '../../assets/img/auth_hide.svg';
import StyledLoginSignup from './LoginSignup.style';


const Signup: React.FC = () => {
  return (
    <StyledLoginSignup>
      <AuthFormSignUp />
      <img className="login__auth-image" src={authImage} alt="authImage" />
    </StyledLoginSignup>
  );
};

export default Signup;
