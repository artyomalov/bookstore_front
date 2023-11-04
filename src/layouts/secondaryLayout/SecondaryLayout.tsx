import React from 'react';
import { Outlet } from 'react-router';
import StyleSecondaryLayout from './SecondaryLayout.style';
import authImage from '../../assets/img/auth_image.svg';

const SecondaryLayout: React.FC = () => {
  return (
    <StyleSecondaryLayout>
      <Outlet />
      <img className="login__auth-image" src={authImage} alt="auth_image" />
    </StyleSecondaryLayout>
  );
};

export default SecondaryLayout;
