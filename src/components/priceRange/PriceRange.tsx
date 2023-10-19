import React from 'react';
import PriceSlider from '../priceSlider/PriceSlider';
import ShowFilterButton from '../showFilterButton/ShowFilterButton';
import StyledPriceFilter from './PriceRange.style';

type Props = {
  filterId: string;
  isOpen: boolean;
  openFilterButtonClickHandler: (id: string) => void;
};

const PriceRange: React.FC<Props> = (props) => {
  return (
    <StyledPriceFilter>
      <ShowFilterButton
        buttonText="Price"
        clickButtonHandler={props.openFilterButtonClickHandler}
        filterId={props.filterId}
      />
      <PriceSlider showSlider={props.isOpen} />
    </StyledPriceFilter>
  );
};

export default PriceRange;
