import styled from 'styled-components';

const StyledLayoutContainer = styled.div`
  width: 100%;

  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.theme.mainWidth};
    height: 50px;
    margin: 0 auto;
    background-color: #a8836d;
    position: relative;
    transition: ${(props) => props.theme.transitionStyle};
    border-radius: ${(props) => props.theme.borderRadius};
  }
`;

export default StyledLayoutContainer;
