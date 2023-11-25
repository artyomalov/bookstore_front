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
import ErrorPage from './pages/error/ErrorPage';
import Book from './pages/book/Book';
import { getLikedBooks, getUserCart } from './store/userStaffSlice';
import Purchases from './pages/purchases/Purchases';
import Search from './pages/search/Search';

const App: React.FC = () => {
  const [isInitialized, setIsInitialized] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      try {
        await dispatch(getUser('empty'));

        const responseGenres = await dispatch(getGenres('empty'));
        await dispatch(getLikedBooks());
        await dispatch(getUserCart());
        if (responseGenres.meta.requestStatus === 'rejected') setIsError(true);

        if (responseGenres !== undefined) setIsInitialized(true);
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

  return isInitialized ? appOrError : <ImageGrid />;
};

export default App;
function getCart(): any {
  throw new Error('Function not implemented.');
}
