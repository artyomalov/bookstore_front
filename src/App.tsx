import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainLayout/MainLayout';
import Catalog from './pages/catalog/Catalog';
import Login from './pages/login/Login';
import Signup from './pages/signUp/Signup';
import RequireAuth from './serviceComponents/RequireAuth';
import Profile from './pages/profile/Profile';
import { useAppDispatch } from './store/typedHooks';
import { getUser } from './store/userSlice';
import ImageGrid from './skeletons/mainSkeleton';
import Cart from './pages/cart/Cart';
import Liked from './pages/liked/Liked';
import { getGenres } from './store/genresSlice';
import { getBooks } from './store/bookSlice';
import SecondaryLayout from './layouts/secondaryLayout/SecondaryLayout';
const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = React.useState(false);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      try {
        await dispatch(getUser('empty'));
        await dispatch(getBooks('empty'));
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
