import styled from 'styled-components';

const StyleSecondaryLayout = styled.div`
  width: ${(props)=>props.theme.widthFor1440};
  /* min-height: 51vh; */
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;

  .login__auth-image {
    width: 612px;
    height: 522px;
  }
`;

export default StyleSecondaryLayout;
