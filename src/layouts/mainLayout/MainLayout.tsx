import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/HeaderUnauthorized';
import AlreadyAuthorized from '../../serviceComponents/AlreadyAuthorized';
import HeaderAuthorized from '../../components/header/HeaderAuthrized';
import { useAppSelector } from '../../store/typedHooks';
import StyledLayoutContainer from './MainLayout.style';

const MainLayout: React.FC = () => {
  const isError = useAppSelector((state) => state.user.isError);
  const errorMessage = useAppSelector((state) => state.user.message);
  return (
    <StyledLayoutContainer>
      <div className={`error ${isError ? 'error__visible' : 'error__hidden'}`}>
        <span>{errorMessage}</span>
      </div>
      <header>
        <AlreadyAuthorized>
          <Header />
          <HeaderAuthorized />
        </AlreadyAuthorized>
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
