import React from 'react';
import starStroke from '../../assets/img/catalog_rating_star_stroke.svg';
import StyledStar from './CatalogStar.style';

type Props = {
  rateLevel: number;
};

const CatalogStar: React.FC<Props> = (props) => {
  const rateLevelCalculated = props.rateLevel - 100;

  return (
    <StyledStar ratelevel={rateLevelCalculated}>
      <div className="catalog-book-item__green-fill"></div>
      <div className="catalog-book-item__white-background">
        <img
          src={starStroke}
          alt="star_stroke"
          className="catalog-book-item__white-background"
        />
      </div>
    </StyledStar>
  );
};

export default CatalogStar;
