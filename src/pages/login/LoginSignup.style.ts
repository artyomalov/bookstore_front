import styled from 'styled-components';

const StyledLoginSignup = styled.div`
  width: ${(props)=>props.theme.mainWidth};
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;

  .login__auth-image {
    width: 49%;
  }
`;

export default StyledLoginSignup;
