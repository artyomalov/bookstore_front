import styled from 'styled-components';

const StyledAuthForm = styled.div`
  width: 40%;
  .auth-component__header {
    font-weight: ${(props) => props.theme.fontWeightBold};
    font-size: ${(props) => props.theme.fontSizeBig};
    margin-bottom: 60px;
  }

  .auth-component__form {
    width: 72%;
  }


  .auth-component__button {
    width: 20.5%;
    height: 44px;
    margin-top: 30px;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colorDarkBlue};
    border: none;
    color: ${(props) => props.theme.colorLight};
    
    &:hover {
      cursor: pointer;
    };
  }
`;

export default StyledAuthForm;
