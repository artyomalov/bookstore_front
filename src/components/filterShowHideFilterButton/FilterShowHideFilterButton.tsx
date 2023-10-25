import React from 'react';
import StyledFilterShowHideFilterButton from './FilterShowHideFilterButton.style';
type Props = {
  buttonText: string;
  clickButtonHandler: (id: string) => void;
  filterId: string;
  buttonBackgroundColor: string;
  isOpen: boolean;
};

const FilterShowHideFilterButton: React.FC<Props> = (props) => {
  return (
    <StyledFilterShowHideFilterButton
      onClick={() => props.clickButtonHandler(props.filterId)}
      buttonbackgroundcolor={props.buttonBackgroundColor}
      buttonarrowposition={!props.isOpen ? 'closed' : 'open'}
    >
      {props.buttonText} <span className="button__arrow"></span>
    </StyledFilterShowHideFilterButton>
  );
};

export default FilterShowHideFilterButton;
