import styled from 'styled-components';

const StyledForm = styled.div`
  width: 413px;
  .auth-component__header {
    font-weight: ${(props) => props.theme.fontWeightBold};
    font-size: ${(props) => props.theme.fontSize40};
    margin-bottom: 60px;
  }

  .auth-component__form {
    width: 100%;
  }


  .auth-component__button {
    width: 151px;
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

export default StyledForm;
