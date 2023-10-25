import React from 'react';
import FormLogin from '../../components/formAuthenticationRegistration/FormLogin';
import StyledLoginSignup from './LoginSignup.style';
import authImage from '../../assets/img/auth_image.svg';
const Login: React.FC = () => {
  return (
    <StyledLoginSignup>
      <FormLogin />
      <img className="login__auth-mage" src={authImage} alt="auth_image" />
    </StyledLoginSignup>
  );
};

export default Login;
