import { Navigate, useLocation } from 'react-router';
import { useAppSelector } from '../store/typedHooks';
import ChildrenPropsType from '../types/serviceTypes';
import { selectIfUserExists } from '../store/selectors';

const RequireAuth: React.FC<ChildrenPropsType> = (props) => {
  const userExists = useAppSelector(selectIfUserExists);
  const location = useLocation();

  if (userExists) {
    return props.children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default RequireAuth;
