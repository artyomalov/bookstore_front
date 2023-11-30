import styled from 'styled-components';

const StyledError = styled.main`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colorLight};
  padding-top: 400px;

  .error__message {
    color: ${(props) => props.theme.colorDarkBlue};
    font-size: 30px;
    font-weight: ${(props) => props.theme.fontWeightNormal};
    text-align: center;
  }
  .error__link {
    display: block;
    width: 250px;
    height: 50px;
    margin: 15px auto 0 auto;
    padding-top: 7.4px;
    background-color: ${(props) => props.theme.colorDarkBlue};
    color: ${(props) => props.theme.colorLight};
    text-decoration: none;
    font-size: 24px;
    font-weight: ${(props) => props.theme.fontWeightNormal};
    border-radius: ${(props) => props.theme.borderRadius};
    text-align: center;
  }
`;

export default StyledError;
