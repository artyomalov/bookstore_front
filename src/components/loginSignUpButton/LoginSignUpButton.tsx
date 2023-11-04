import React from 'react';
import { Link } from 'react-router-dom';
import StyledLoginSignUpButton from './LoginSignUpButton.style';


const LoginSignUpButton:React.FC = () => {
  return (
    <StyledLoginSignUpButton>
      <Link className="button__auth-link" to="auth/login">
        Log in/
      </Link>
      <Link className="button__auth-link" to="auth/signup">
        Sign Up
      </Link>
    </StyledLoginSignUpButton>
  );
};

export default LoginSignUpButton;
