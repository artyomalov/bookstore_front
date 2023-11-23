import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
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
