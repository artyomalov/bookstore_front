import React from 'react';
import CatalogStar from '../catalogStar/CatalogStar';
import StyledStarRating from './CatalogStarRating.style';
import starArray from '../../const/starArray';
type Props = {
  rating: number;
};


const CatalogStarRating: React.FC<Props> = (props) => {
  const roundedRating = Math.round(props.rating * 10) / 10;
  const fixedZeroRating = roundedRating.toFixed(1);
  let rateCounter = props.rating;
  return (
    <StyledStarRating>
      <div className="catalog-star-rating__stars-container">
        {starArray.map((item) => {
          const rateLevel = rateCounter > 1 ? 100 : rateCounter * 100;
          rateCounter -= 1;
          return <CatalogStar key={item} rateLevel={rateLevel} />;
        })}
      </div>
      <p className="catalog-star-rating__rate-count">{fixedZeroRating}</p>
    </StyledStarRating>
  );
};

export default CatalogStarRating;
