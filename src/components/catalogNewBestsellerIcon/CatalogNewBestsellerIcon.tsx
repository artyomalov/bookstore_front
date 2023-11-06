import React from 'react';
import StyledCatalogNewBestsellerIcon from './CatalogNewBestsellerIcon.style';

type Props = {
  text: string;
};

const CatalogNewBestsellerIcon: React.FC<Props> = (props) => {
  return (
    <StyledCatalogNewBestsellerIcon text={props.text}>
      {props.text}
    </StyledCatalogNewBestsellerIcon>
  );
};

export default CatalogNewBestsellerIcon;
