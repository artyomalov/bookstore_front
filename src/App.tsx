import { unwrapResult } from '@reduxjs/toolkit';
import React, { CSSProperties } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainLayout/MainLayout';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Signup from './pages/signUp/Signup';
import RequireAuth from './serviceComponents/RequireAuth';
import Profile from './pages/profile/Profile';
import { useAppDispatch } from './store/typedHooks';
import { getUser } from './store/userSlice';
import Cart from './pages/cart/Cart';
import Liked from './pages/liked/Liked';
import { getGenres } from './store/filtersSlice';
import SecondaryLayout from './layouts/secondaryLayout/SecondaryLayout';
import ErrorPage from './pages/error/ErrorPage';
import Book from './pages/book/Book';
import { getLikedBooks, getUserCart } from './store/userStaffSlice';
import Purchases from './pages/purchases/Purchases';
import Search from './pages/search/Search';
import ClipLoader from 'react-spinners/ClipLoader';
import MoonLoader from 'react-spinners/MoonLoader';
import GridLoader from 'react-spinners/GridLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      try {
        const userResponse = await dispatch(getUser());
        if (userResponse.meta.requestStatus === 'fulfilled') {
          await dispatch(getLikedBooks());
          await dispatch(getUserCart());
        }
        const genresResponse = await dispatch(getGenres());
        if (genresResponse.meta.requestStatus === 'rejected') setIsError(true);
        if (genresResponse !== undefined) setIsInitialized(true);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const appOrError = isError ? (
    <Routes>
      <Route path="/" element={<ErrorPage />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="book/:slug" element={<Book />} />
        <Route path="auth" element={<SecondaryLayout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route
          path="cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="liked"
          element={
            <RequireAuth>
              <Liked />
            </RequireAuth>
          }
        />
        <Route
          path="purchases"
          element={
            <RequireAuth>
              <Purchases />
            </RequireAuth>
          }
        />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="search" element={<Search />} />s
      </Route>
      <Route path="/error_404" element={<ErrorPage />} />
    </Routes>
  );

  return isInitialized ? (
    appOrError
  ) : (
      <GridLoader
        color="#344966"
        loading={true}
        cssOverride={{
          display: 'block',
          margin: '28vh auto',
          borderColor: '#344966',
        }}
        size={120}
        aria-label="Loading Spinner"
        data-testid="loader"
        speedMultiplier={0.4}
      />
  );
};

export default App;
