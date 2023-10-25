import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Catalog from './pages/catalog/Catalog';
import Login from './pages/login/Login';
import Signup from './pages/login/Signup';
import RequireAuth from './serviceComponents/RequireAuth';
import Profile from './pages/profile/Profile';
import { useAppDispatch, useAppSelector } from './store/typedHooks';
import { getUser, setUser } from './store/userSlice';
import ImageGrid from './skeletons/mainSkeleton';
import Cart from './pages/cart/Cart';
import Liked from './pages/liked/Liked';
import { getGenres } from './store/filtersSlice';
import { UserType } from './types/userTypes';
import { GenreType } from './types/filtersTypes';
import userRequests from './api/userAPI/userRequests';

const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = React.useState(false);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      try {
        await dispatch(getUser('empty'));
        await dispatch(getGenres('empty'));
        setIsInitialized(true);
      } catch (error) {
        setIsInitialized(false);
        console.error(error);
      }
    })();
  }, []);
  return isInitialized ? (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Catalog />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
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
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  ) : (
    <ImageGrid />
  );
};

export default App;
