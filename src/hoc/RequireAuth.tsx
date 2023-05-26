import { Navigate, useLocation } from 'react-router';

type PropsType = {
  children: JSX.Element;
};

const RequireAuth = (props: PropsType) => {
  const location = useLocation();

  if (true) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return props.children;
};

export default RequireAuth;
