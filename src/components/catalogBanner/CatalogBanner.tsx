import React from 'react';
import StyledBanner from './CatalogBanner.style';

type Props = {
  imageLink: string;
  imageAlt: string;
  titleText: string;
  sloganText: string;
  buttonText: string;
  //   positionData: string;
};

const Banner: React.FC<Props> = (props) => {
  return (
    <StyledBanner>
      <div className="banner__image-frame">
        <img
          className="banner__background-image"
          src={props.imageLink}
          alt={props.imageAlt}
        />
      </div>
      <div className="banner__text-container">
        <h2 className="banner__title">{props.titleText}</h2>
        <p className="banner__slogan">{props.sloganText}</p>
        <button className="banner__button">{props.buttonText}</button>
      </div>
    </StyledBanner>
  );
};

export default Banner;
