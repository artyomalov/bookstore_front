import React from 'react';
import ShowFilterButton from '../showFilterButton/ShowFilterButton';
import FilterSortByList from '../filterSortByList/FilterSortByList';
import StyledFilterSortBy from './FilterSortBy.style';
type Props = {
  filterId: string;
  isOpen: boolean;
  openFilterButtonClickHandler: (id: string) => void;
};

const FilterSortBy: React.FC<Props> = (props) => {
  return (
    <StyledFilterSortBy>
      <ShowFilterButton
        buttonText="Sort by"
        clickButtonHandler={props.openFilterButtonClickHandler}
        filterId={props.filterId}
      />
      <FilterSortByList showchoiceslist={props.isOpen} />
    </StyledFilterSortBy>
  );
};

export default FilterSortBy;
