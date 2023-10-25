import React from 'react';
import StyledFilterCatalogHeader from './FilterCatalogHeader.style';
import FilterGenre from '../filterGenre/FilterGenre';
import FilterPriceRange from '../filterPriceRange/FilterPriceRange';
import FilterSortBy from '../filterSortBy/FilterSortBy';

const FilterCatalogHeader: React.FC = () => {
  const [openFilterId, setOpenFilterId] = React.useState<null | string>(null);
  const genreId = 'genre';
  const priceRangeId = 'priceRangeId';
  const sortById = 'sortBy';

  const openFilterButtonClickHandler = (filterId: string) => {
    filterId === openFilterId
      ? setOpenFilterId(null)
      : setOpenFilterId(filterId);
  };
  return (
    <StyledFilterCatalogHeader>
      <h2 className="catalog-header__header">Catalog</h2>
      <div className="catalog-header__filters">
        <FilterGenre
          filterId={genreId}
          isOpen={genreId === openFilterId}
          openFilterButtonClickHandler={openFilterButtonClickHandler}
        />
        <FilterPriceRange
          filterId={priceRangeId}
          isOpen={priceRangeId === openFilterId}
          openFilterButtonClickHandler={openFilterButtonClickHandler}
        />
        <FilterSortBy
          filterId={sortById}
          isOpen={sortById === openFilterId}
          openFilterButtonClickHandler={openFilterButtonClickHandler}
        />
      </div>
    </StyledFilterCatalogHeader>
  );
};

export default FilterCatalogHeader;
