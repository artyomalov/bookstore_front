import { Navigate, useLocation } from 'react-router';
import { useAppSelector } from '../store/typedHooks';
import ChildrenPropsType from '../types/serviceTypes';

const RequireAuth: React.FC<ChildrenPropsType> = (props) => {
  const email = useAppSelector((state) => state.user.user.email);
  const location = useLocation();

  if (email === 'not set') {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return props.children;
};

export default RequireAuth;
