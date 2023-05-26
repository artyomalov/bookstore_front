import React from 'react';
import AuthFormSignUp from '../components/AuthFormSignUp';
import authImage from '../assets/img/auth_image.svg';
import authMail from '../assets/img/auth_mail.svg';
import authHide from '../assets/img/auth_hide.svg';
import StyledLoginSignup from './LoginSignup.style';

const inputFields = [
  {
    title: 'email',
    type: 'email',
    explanation: 'Enter your email',
    image: authMail,
  },
  {
    title: 'password',
    type: 'password',
    explanation: 'Enter your password',
    image: authHide,
  },
  {
    title: 'repeat password',
    type: 'password',
    explanation: 'Repeat your password without errors',
    image: authHide,
  },
];

const Signup: React.FC = () => {
  return (
    <StyledLoginSignup>
      <AuthFormSignUp />
      <img className="login__auth-image" src={authImage} alt="authImage" />
    </StyledLoginSignup>
  );
};

export default Signup;
