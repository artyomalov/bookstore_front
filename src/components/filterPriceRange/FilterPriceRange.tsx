import React from 'react';
import PriceSlider from '../filterPriceSlider/FilterPriceSlider';
import FilterShowHideFilterButton from '../filterShowHideFilterButton/FilterShowHideFilterButton';
import StyledFilterPriceRange from './FilterPriceRange.style';
import FilterArrow from '../filterArrow/FilterArrow';

type Props = {
  filterId: string;
  isOpen: boolean;
  openFilterButtonClickHandler: (id: string) => void;
};

const FilterPriceRange: React.FC<Props> = (props) => {
  return (
    <StyledFilterPriceRange height={props.isOpen ? '200px' : '0px'}>
      <FilterShowHideFilterButton
        buttonText="Price"
        clickButtonHandler={props.openFilterButtonClickHandler}
        filterId={props.filterId}
        isOpen={props.isOpen}
        buttonBackgroundColor="green"
      />
      <div className="price-range__container">
        <FilterArrow />
        <PriceSlider />
      </div>
    </StyledFilterPriceRange>
  );
};

export default FilterPriceRange;
