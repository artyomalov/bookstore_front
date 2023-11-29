import React, { Dispatch, SetStateAction } from 'react';
import StyledCatalogPagination from './CatalogPagination.style';
import { PaginationDataType } from '../../types/bookTypes';
import usePagination from '../../services/usePagination';
import CatalogPaginationCircle from '../catalogPaginationCircle/CatalogPaginationCircle';

type Props = {
  paginationData: PaginationDataType;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};
const CatalogPagination: React.FC<Props> = (props) => {
  const paginationArray = usePagination(
    2,
    props.page,
    props.paginationData.pagesCount
  );

  const renderingPaginationArray =
    paginationArray !== undefined ? paginationArray : [];

  const onLeftArrorClickHandler = () => {
    if (!props.paginationData.hasPrevious) return;
    props.setPage((prev) => prev - 1);
  };
  const onRightArrorClickHandler = () => {
    if (!props.paginationData.hasNext) return;
    props.setPage((prev) => prev + 1);
  };
  const onCircleClickHandler = (pageNumber: number) => {
    props.setPage(pageNumber);
  };
  return (
    <StyledCatalogPagination>
      <span
        className="catalog-paginaton__arrow"
        onClick={onLeftArrorClickHandler}
      ></span>
      <div className="catalog-paginaton__circles-container">
        {renderingPaginationArray.map((i, index) => {
          if (typeof i === 'string') return <span key={index}>{i}</span>;
          return (
            <CatalogPaginationCircle
              key={index}
              selected={i === props.page ? 'selected' : 'unselected'}
              circlePageNumber={i}
              onCircleClickHandler={onCircleClickHandler}
            />
          );
        })}
      </div>
      <span
        className="catalog-paginaton__arrow"
        onClick={onRightArrorClickHandler}
      ></span>
    </StyledCatalogPagination>
  );
};

export default CatalogPagination;
