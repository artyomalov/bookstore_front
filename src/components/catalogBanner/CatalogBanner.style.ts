import styled from 'styled-components';

const StyledBanner = styled.div`
  width: 100%;
  position: relative;
  margin: 40px auto 0 auto;

  .banner__image-frame {
    width: 100%;
    height: 400px;
    border-radius: ${(props) => props.theme.borderRadius};
    overflow: hidden;
  }
  .banner__background-image {
    width: 100%;
    height: auto;
  }
  .banner__text-container {
    position: absolute;
    top: 80px;
    left: 108px;
  }
  .banner__title {
    font-size: ${(props) => props.theme.fontSize40};
    font-weight: ${(props) => props.theme.fontWeightBold};
    color: ${(props) => props.theme.colorDark};
  }
  .banner__slogan {
    width: 217px;
    height: 80px;
    font-size: ${(props) => props.theme.fontSize20};
    font-weight: ${(props) => props.theme.fontWeightMedium};
  }
  .banner__button {
    width: 230px;
    height: 44px;
    margin-top: 50px;
    border: none;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colorDarkBlue};
    color: ${(props) => props.theme.colorLight};
    font-size: ${(props) => props.theme.fontSize16};
    font-weight: ${(props) => props.theme.fontWeightMedium};
    cursor: pointer;
  }
  @media (max-width: ${(props) => props.theme.mediaMaxWidth834}) {
      margin: 45px auto 0 auto;
      
      .banner__image-frame {
      }
      .banner__text-container {
        position: absolute;
        top: 45px;
        left: 40px;
      }
      .banner__title {
        font-size: ${(props) => props.theme.fontSize32};
        font-weight: ${(props) => props.theme.fontWeightBold};
      }
      .banner__slogan {
        width: 217px;
        height: 48px;
        font-size: ${(props) => props.theme.fontSize16};
        font-weight: ${(props) => props.theme.fontWeightMedium};
      }
    }
`;

export default StyledBanner;
