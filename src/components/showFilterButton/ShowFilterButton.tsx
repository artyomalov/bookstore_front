import React from 'react';
import StyledButton from './ShowFilterButton.style';
type Props = {
  buttonText: string;
  clickButtonHandler: (id: string) => void;
  filterId: string;
};

const ShowFilterButton: React.FC<Props> = (props) => {
  return (
    <StyledButton onClick={() => props.clickButtonHandler(props.filterId)}>
      {props.buttonText} <span className="button__arrow"></span>
    </StyledButton>
  );
};

export default ShowFilterButton;
