import React from 'react';
import AuthFormLogin from '../components/AuthFormLogin';
import auth_image from '../assets/img/auth_image.svg';
import StyledLoginSignup from './LoginSignup.style';
import authMail from '../assets/img/auth_mail.svg';
import authHide from '../assets/img/auth_hide.svg';

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
];

const Login: React.FC = () => {
  return (
    <StyledLoginSignup>
      <AuthFormLogin />
      <img className="login__auth-mage" src={auth_image} alt="auth_image" />
    </StyledLoginSignup>
  );
};

export default Login;
