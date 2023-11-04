import React from 'react';
import StyledFilterSortByList from './FilterSortByList.style';
import FilterSortByListItem from '../filterSortByListItem/FilterSortByListItem';
import { useAppDispatch } from '../../store/typedHooks';
import { setSelectedSortType } from '../../store/genresSlice';

const sortChoicesArray = [
  { id: 1, sortByTitle: 'Price', sortItemSlug: 'price' },
  { id: 2, sortByTitle: 'Name', sortItemSlug: 'name' },
  { id: 3, sortByTitle: 'Author name', sortItemSlug: 'autonr_name' },
  { id: 4, sortByTitle: 'Rating', sortItemSlug: 'rating' },
  { id: 5, sortByTitle: 'Date of issue', sortItemSlug: 'date_of_issue' },
];

type Props = {
  showchoiceslist: boolean;
};

const FilterSortByList: React.FC<Props> = (props) => {
  const [choiceSlug, setChoiceSlug] = React.useState<string | null>(null);
  const dispatch = useAppDispatch();

  const clickOnChoiceHandler = (
    selectedChoiceId: string,
    choiceId: string | null
  ) => {
    if (selectedChoiceId === choiceId) {
      setChoiceSlug(null);
      dispatch(setSelectedSortType('all'));
    } else {
      setChoiceSlug(selectedChoiceId);
      dispatch(setSelectedSortType(selectedChoiceId));
    }
  };
  return (
    <StyledFilterSortByList >
      {sortChoicesArray.map((choice) => {
        return (
          <FilterSortByListItem
            key={choice.id}
            choice={choice}
            clickOnChoiceHandler={clickOnChoiceHandler}
            choiceSlug={choiceSlug}
            isSelected={choiceSlug === choice.sortItemSlug}
          />
        );
      })}
    </StyledFilterSortByList>
  );
};

export default FilterSortByList;
