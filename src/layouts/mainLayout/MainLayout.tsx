import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { useAppSelector } from '../../store/typedHooks';
import StyledLayoutContainer from './MainLayout.style';
import Notification from '../../components/notification/Notification';

const MainLayout: React.FC = () => {
  return (
    <StyledLayoutContainer>
      <Notification />
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </StyledLayoutContainer>
  );
};

export default MainLayout;
