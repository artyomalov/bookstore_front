import { Navigate, useLocation } from 'react-router';

type PropsType = {
  children: JSX.Element;
};

const RequireAuth = (props: PropsType) => {
  const location = useLocation();
  const x =5
  if (x > 4) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return props.children;
};

export default RequireAuth;
