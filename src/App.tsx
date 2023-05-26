import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RequireAuth from './hoc/RequireAuth';
import UserInfo from './pages/UserInfo';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Catalog />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route
          path="user/:id"
          element={
            <RequireAuth>
              <UserInfo />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
