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
import Favorite from './pages/favorite/Favorite';
import { getGenres } from './store/genresSlice';
import { getBooks } from './store/bookSlice';
import SecondaryLayout from './layouts/secondaryLayout/SecondaryLayout';
import ErrorPage from './pages/error/ErrorPage';
import Book from './pages/book/Book';
import { getLikedBooks } from './store/userStaffSlice';
const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      try {
        await dispatch(getUser('empty'));
        const responseBooks = await dispatch(getBooks('empty'));
        const responseGenres = await dispatch(getGenres('empty'));
        await dispatch(getLikedBooks());
        if (
          responseBooks.meta.requestStatus === 'rejected' ||
          responseGenres.meta.requestStatus === 'rejected'
        )
          setIsError(true);

        if (responseBooks !== undefined || responseGenres !== undefined)
          setIsInitialized(true);
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
        <Route index element={<Catalog />} />
        <Route path="/:slug" element={<Book />} />
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
          path="favorite"
          element={
            <RequireAuth>
              <Favorite />
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
      <Route path="/error_404" element={<ErrorPage />} />
    </Routes>
  );

  return isInitialized ? appOrError : <ImageGrid />;
};

export default App;
