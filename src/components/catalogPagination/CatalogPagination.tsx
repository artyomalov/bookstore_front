import React, { Dispatch, SetStateAction } from 'react';
import StyledCatalogPagination from './CatalogPagination.style';
import { PaginationDataType } from '../../types/bookTypes';

type Props = {
  paginationData: PaginationDataType;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

// const createPagesArray = (pageNumber: number, totalPageCount: number) => {
//   const baseArray = [1, 2, 3, 4, 5, 6, 7];
//   baseArray.map((i) => {
//     if (i < pageNumber) return pageNumber - i;
//     if ((i = pageNumber)) return i;
//     if (i > pageNumber) return pageNumber + i;
//   });
//   if (pageNumber <= 4) {5
//     const rightSideFromPageNumberCount = 7 - pageNumber;
//     const leftSideFromPageNumberCount = 7 - rightSideFromPageNumberCount - 1;
//     const riteSideArray = [];
//     const leftSideArray = [];
//     for (let i = 1; i <= rightSideFromPageNumberCount; i++) {
//       riteSideArray.push(i + pageNumber);
//     }
//     for (let i = 1; i < leftSideFromPageNumberCount; i++) {
//       leftSideArray.push(i + pageNumber);
//     }
//     const unitedArray = [
//       ...leftSideArray,
//       pageNumber,
//       ...riteSideArray,
//       totalPageCount,
//     ];
//   }
// };
const CatalogPagination: React.FC<Props> = (props) => {
  const pagesCount = props.paginationData.pagesCount;
  const pagesArray = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesArray.push(i);
  }
  const onLeftArrorClickHandler = () => {
    if (!props.paginationData.hasPrevious) return;
    props.setPage((prev) => prev - 1);
  };
  const onRightArrorClickHandler = () => {
    console.log('next');
    if (!props.paginationData.hasNext) return;
    props.setPage((prev) => prev + 1);
  };
  const onCircleClickHandler = (pageNumber: number) => {
    console.log('number');
    props.setPage(pageNumber);
  };
  return (
    <StyledCatalogPagination>
      <span
        className="catalog-paginaton__arrow"
        onClick={onLeftArrorClickHandler}
      ></span>
      <div className="catalog-paginaton__circles-container">
        {pagesArray.map((i) => {
          return (
            <div
              key={i}
              className="catalog-paginaton__circle"
              onClick={() => onCircleClickHandler(i)}
            ></div>
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
