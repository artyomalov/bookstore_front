import React from 'react';
import AuthFormLogin from '../../components/authForm/AuthFormLogin';
import StyledLoginSignup from './LoginSignup.style';
import authImage from '../../assets/img/auth_image.svg';
const Login: React.FC = () => {
  return (
    <StyledLoginSignup>
      <AuthFormLogin />
      <img className="login__auth-mage" src={authImage} alt="auth_image" />
    </StyledLoginSignup>
  );
};

export default Login;
