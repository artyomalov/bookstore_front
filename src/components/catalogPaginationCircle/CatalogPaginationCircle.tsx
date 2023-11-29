import React from 'react';
import StyledCatalogPaginationCircle from './CatalogPaginationCircle.style';

type Props = {
  selected: string;
  onCircleClickHandler: (pageNumber: number) => void;
  circlePageNumber: number;
};

const CatalogPaginationCircle: React.FC<Props> = (props) => {
  return (
    <StyledCatalogPaginationCircle
      onClick={() => props.onCircleClickHandler(props.circlePageNumber)}
      selected={props.selected}
    ></StyledCatalogPaginationCircle>
  );
};

export default CatalogPaginationCircle;
