import React from 'react';
import StyledSortByFilterListItem from './FilterSortByListItem.style';

type Props = {
  choice: {
    id: number;
    sortByTitle: string;
    sortItemSlug: string;
  };
  clickOnChoiceHandler: (
    selectedChoiceId: string,
    choiceId: string | null
  ) => void;
  choiceSlug: string | null;
  isSelected: boolean;
};

const FilterSortByListItem: React.FC<Props> = (props) => {
  return (
    <StyledSortByFilterListItem
      onClick={() =>
        props.clickOnChoiceHandler(props.choice.sortItemSlug, props.choiceSlug)
      }
      style={{color: props.isSelected?'#344966': '#B9BAC3'}}
    >
      {props.choice.sortByTitle}
    </StyledSortByFilterListItem>
  );
};

export default FilterSortByListItem;
