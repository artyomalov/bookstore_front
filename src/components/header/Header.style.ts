import styled from 'styled-components';

const StyledHeader = styled.div`
  width: ${(props) => props.theme.mainWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header__link-input-container {
    width: 80%;
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
    font-weight: ${(props) => props.theme.fontWeightNormal};
    font-size: ${(props) => props.theme.fontSizeNormal};
  }
  .header__input-container {
    width: 85%;
    height: 64px;
    border-radius: 16px;
    padding-left: 2%;
    background-color: ${(props) => props.theme.colorLight};
    display: flex;
    align-items: center;
  }

  .header__input {
    width: 95%;
    height: 100%;
    padding-left: 2%;
    background: none;
    border: none;
    font-size: ${(props) => props.theme.fontSizeNormal};
    font-weight: ${(props) => props.theme.fontWeightThin};

    &:focus {
      outline: none;
      outline-offset: none;
    }
  }


  .header__user-container {
    width: 16%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__user-button {
    height: 48px;
    width: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    vertical-align: center;
  }
`;

export default StyledHeader;
