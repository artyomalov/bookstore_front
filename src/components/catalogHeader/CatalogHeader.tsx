import React from 'react';
import StyledCatalogHeader from './CatalogHeader.style';
import SortByGenreDropdownMenu from '../sortByGenreDropdownMenu/SortByGenreDropdownMenu';
import PriceRange from '../../components/priceRange/PriceRange';
import FilterSortBy from '../filterSortBy/FilterSortBy';
const CatalogHeader: React.FC = () => {
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
    <StyledCatalogHeader>
      <h2 className="catalog-header__header">Catalog</h2>
      <div className="catalog-header__filters">
        <SortByGenreDropdownMenu
          filterId={genreId}
          isOpen={genreId === openFilterId}
          openFilterButtonClickHandler={openFilterButtonClickHandler}
        />
        <PriceRange
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
    </StyledCatalogHeader>
  );
};

export default CatalogHeader;
