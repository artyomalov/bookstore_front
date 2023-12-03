import styled from 'styled-components';

const StyledHeader = styled.div`
  width: ${(props) => props.theme.widthFor1440};
  margin: 24px auto 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header__link-input-container {
    width: 80%;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header__logo {
    width: 6%;
  }

  .header__catalog-link-input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }

  .header__catalog {
    width: 4.5%;
    text-decoration: none;
    color: ${(props) => props.theme.colorDark};
    font-weight: ${(props) => props.theme.fontWeightMedium};
    font-size: ${(props) => props.theme.fontSize20};
  }
  .header__input-container {
    width: 85%;
    height: 64px;
  }
  @media (max-width: ${(props) => props.theme.mediaMaxWidth834}) {
    width: ${(props) => props.theme.widthFor834};
    /* margin: 24px auto 0 auto; */
    .header__link-input-container {
      width: 525px;
      height: 64px;
    }
    .header__logo {
      width: 88.43px;
    }
    .header__catalog-link-input-container {
      width: 386px;
    }
    .header__catalog {
      width: 66px;
    }
    .header__input-container {
      width: 247px;
    }
  }
`;

export default StyledHeader;
