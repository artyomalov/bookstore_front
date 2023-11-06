import React from 'react';
import StyledBook from './Book.style';
import { useLocation } from 'react-router-dom'

const Book: React.FC = () => {
  const location = useLocation();
  console.log(location.state);

  return <StyledBook>Book</StyledBook>;
};

export default Book;
