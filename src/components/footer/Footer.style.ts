import styled, { css } from 'styled-components';

const textStyle = css`
  color: ${(props) => props.theme.colorLight};
  font-size: ${(props) => props.theme.fontSize20};
  font-weight: ${(props) => props.theme.fontWeightMedium};
`;

const linkCss = css`
  text-decoration: none;
  &:visited,
  &:focus,
  &:active {
    color: ${(props) => props.theme.colorLight};
  }
`;

const StyledFooter = styled.div`
  width: 100%;
  height: 341px;
  background-color: ${(props) => props.theme.colorDark};
  margin-top: 110px;

  .footer__container {
    width: ${(props) => props.theme.widthFor1440};
    margin: 0 auto;
    padding-top: 73px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .footer__logo {
    display: block;
    margin-bottom: 40px;
  }
  .footer__info-container {
    width: 267px;
  }
  .footer__mail-to {
    margin-bottom: 5px;
  }
  .footer__phone-number {
    ${textStyle}
  }

  .footer__mail-to {
    ${textStyle}
    ${linkCss}
  }

  .footer__nav {
    width: 135px;
  }
  .footer__nav-links-container {
    width: 100%;
    list-style: none;
  }

  .footer__nav-link-item {
    margin-bottom: 5px;
  }

  .footer__nav-link-item-link {
    ${textStyle}
    ${linkCss}
  }
  .footer__adress-container {
    width: 413px;
    height: 160px;
  }
  .footer__post-adress {
    ${textStyle}
  }
  .footer__map {
    margin-top: 5px;
    border-radius: ${(props) => props.theme.borderRadius};
  }
`;

export default StyledFooter;
