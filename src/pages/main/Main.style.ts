import styled from 'styled-components';

const StyledMainPage = styled.main`
  width: ${(props) => props.theme.widthFor1440};
  margin: 0 auto;
  @media (max-width: ${(props) => props.theme.mediaMaxWidth834}) {
    width: ${(props) => props.theme.widthFor834};
  }
`;

export default StyledMainPage;
