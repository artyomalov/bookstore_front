import React from 'react';
import StyledError from './Error.style';

const Error = () => {
  return (
    <StyledError>
      <div className="error__message">
        500 | Sorry, something went wrong and we can't show you our store,
        <br />
        but we're working to fix it!
      </div>
    </StyledError>
  );
};

export default Error;
