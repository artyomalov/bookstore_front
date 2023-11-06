import styled from 'styled-components';

const StyledError = styled.main`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colorLight};
  padding-top: 400px;
  .error__message {
    width: ${(props) => props.theme.mainWidth};
    margin: 0 auto;
    color: ${(props) => props.theme.colorDarkBlue};
    font-size: 30px;
    font-weight: ${(props) => props.theme.fontWeightNormal};
    text-align: center;
  }
`;
export default StyledError;
