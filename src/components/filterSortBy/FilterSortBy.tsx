import React from 'react';
import FilterShowHideFilterButton from '../filterShowHideFilterButton/FilterShowHideFilterButton';
import FilterSortByList from '../filterSortByList/FilterSortByList';
import StyledFilterSortBy from './FilterSortBy.style';
import FilterArrow from '../filterArrow/FilterArrow';
type Props = {
  filterId: string;
  isOpen: boolean;
  openFilterButtonClickHandler: (id: string) => void;
};

const FilterSortBy: React.FC<Props> = (props) => {
  return (
    <StyledFilterSortBy showchoiceslist={props.isOpen ? '236px' : '0px'}>
      <FilterShowHideFilterButton
        buttonText="Sort by"
        clickButtonHandler={props.openFilterButtonClickHandler}
        filterId={props.filterId}
        isOpen={props.isOpen}
        buttonBackgroundColor="none"
      />
      <div className="sort-by__filter-list-container">
        <FilterArrow />
        <FilterSortByList showchoiceslist={props.isOpen} />
      </div>
    </StyledFilterSortBy>
  );
};

export default FilterSortBy;
