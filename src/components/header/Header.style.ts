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
  }

 
`;

export default StyledHeader;
