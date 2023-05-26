import styled from 'styled-components';

const StyledHeader = styled.div`
  padding-top: 2%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header__logo {
    width: 6%;
  }
  .header__catalog {
    width: 4.5%;
    text-decoration: none;
    color: ${(props)=>props.theme.colorDark};
    margin-left: 7%;
    font-weight: ${(props)=>props.theme.fontWeightNormal};
    font-size: ${(props)=>props.theme.fontSizeNormal};
  }

  .header__input-container {
    margin-right: 10%;
    width: 43.75%;
    height: 64px;
    border-radius: 16px;
    padding-left: 1.5%;
    background-color: ${(props)=>props.theme.colorLight};
    display: flex;
    align-items: center;
  }

  .header__input {
    margin-left: 0.5%;
    width: 95%;
    height: 100%;
    background: none;
    border: none;
    font-size: ${(props)=>props.theme.fontSizeNormal};
    font-weight: ${(props)=>props.theme.fontWeightThin};

    &:focus {
      outline: none;
      outline-offset: none;
    }
  }

  .header__auth-container {
    width: 16%;
    height: 44px;
    background-color: #344966;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

.header__auth-link {
    color: #F0F4EF;
    text-decoration: none;
    font-size: ${(props)=>props.theme.fontSizeNormal};
    font-weight: ${(props)=>props.theme.fontWeightNormal};

    
    &:hover, &:visited, &:active {
        text-decoration: none;
        color: #F0F4EF;
    }
    &:first-of-type{
        margin-right: 1%;
    }
    
}


`;

export default StyledHeader;
