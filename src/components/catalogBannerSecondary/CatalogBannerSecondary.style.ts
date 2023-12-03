import styled from 'styled-components';

const StyledCatalogBannerSecondary = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 92px;
  position: relative;
  .catalog-banner-secondary__background {
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.theme.borderRadius};
  }
  .catalog-banner-secondary__image {
    width: 521px;
    height: 462px;
    position: absolute;
    left: 108px;
    bottom: 0;
  }
  .catalog-banner-secondary__text-container {
    width: 415px;
    height: 130px;
    position: absolute;
    bottom: 190px;
    right: 108px;
  }
  .catalog-banner-secondary__title {
    margin-bottom: 10px;
    font-size: ${(props) => props.theme.fontSize40};
    font-weight: ${(props) => props.theme.fontWeightBold};
  }
  .catalog-banner-secondary {
    margin-bottom: 50px;
    font-size: ${(props) => props.theme.fontSize20};
    font-weight: ${(props) => props.theme.fontWeightMedium};
  }
`;

export default StyledCatalogBannerSecondary;
