import React from 'react';
import { Link } from 'react-router-dom';
import StyledHeaderLoginSignUpButton from './HeaderLoginSignUpButton.style';

const HeaderLoginSignUpButton: React.FC = () => {
  return (
    <StyledHeaderLoginSignUpButton>
      <Link className="button__auth-link" to="auth/login">
        Log in/
      </Link>
      <Link className="button__auth-link" to="auth/signup">
        Sign Up
      </Link>
    </StyledHeaderLoginSignUpButton>
  );
};

export default HeaderLoginSignUpButton;
