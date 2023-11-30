import React from 'react';
import { useLocation } from 'react-router';
import StyledError from './ErrorPage.style';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const location = useLocation();
  console.log(location.state);

  const errorMessage = location.state
    ? location.state.errorText
    : "500 | Sorry, something went wrong, but we're working to fix it!";

  return (
    <StyledError>
      <p className="error__message">{errorMessage}</p>
      {location.state ? (
        <Link to="/" className="error__link">
          Catalog
        </Link>
      ) : null}
    </StyledError>
  );
};

export default ErrorPage;
