import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout: React.FC = () => {
  const StyledLayoutContainer = styled.div`
    width: 100%;
  `;

  return (
    <StyledLayoutContainer>
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
