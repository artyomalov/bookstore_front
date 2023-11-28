import React from 'react';
import StyledFilterSortByList from './FilterSortByList.style';
import FilterSortByListItem from '../filterSortByListItem/FilterSortByListItem';
import { useAppDispatch } from '../../store/typedHooks';
import { setSelectedSortType } from '../../store/filtersSlice';

const sortChoicesArray = [
  { id: 1, sortByTitle: 'Price', sortItemSlug: 'hardcover_price' },
  { id: 2, sortByTitle: 'Name', sortItemSlug: 'title' },
  { id: 3, sortByTitle: 'Author name', sortItemSlug: 'authors__name' },
  { id: 4, sortByTitle: 'Rating', sortItemSlug: 'rating' },
  { id: 5, sortByTitle: 'Date of issue', sortItemSlug: 'created_at' },
];

type Props = {
  showchoiceslist: boolean;
};

const FilterSortByList: React.FC<Props> = (props) => {
  const [choiceSlug, setChoiceSlug] = React.useState<string | null>(null);
  const dispatch = useAppDispatch();

  const clickOnChoiceHandler = (selectedChoiceSlug: string) => {
    if (selectedChoiceSlug === choiceSlug) {
      setChoiceSlug(null);
      dispatch(setSelectedSortType('id'));
    } else {
      setChoiceSlug(selectedChoiceSlug);
      dispatch(setSelectedSortType(selectedChoiceSlug));
    }
  };
  return (
    <StyledFilterSortByList>
      {sortChoicesArray.map((choice) => {
        return (
          <FilterSortByListItem
            key={choice.id}
            choice={choice}
            clickOnChoiceHandler={clickOnChoiceHandler}
            isSelected={choiceSlug === choice.sortItemSlug}
          />
        );
      })}
    </StyledFilterSortByList>
  );
};

export default FilterSortByList;
