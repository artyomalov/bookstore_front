import styled from 'styled-components';

const StyledLayoutContainer = styled.div`
  width: 100%;

  .error {
    width: 90%;
    height: 50px;
    margin: 0 auto;
    background-color: #a8836d;
    position: relative;
    transition: ${(props) => props.theme.transitionStyle};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${(props) => props.theme.borderRadius};
  }

  .error__hidden {
    /* opacity: 0; */
    top: -100px;
  }

  .error__visible {
    /* opacity: 1; */
    top: 0;
  }
`;

export default StyledLayoutContainer;
