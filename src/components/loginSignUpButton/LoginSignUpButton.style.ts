import styled from 'styled-components';

const StyledLoginSignUpButton = styled.div`
  width: 231px;
  height: 44px;
  background-color: #344966;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  .button__auth-link {
    color: #f0f4ef;
    text-decoration: none;
    font-size: ${(props) => props.theme.fontSizeNormal};
    font-weight: ${(props) => props.theme.fontWeightNormal};

    &:hover,
    &:visited,
    &:active {
      text-decoration: none;
      color: #f0f4ef;
    }
    &:first-of-type {
      margin-right: 1%;
    }
  }
`;

export default StyledLoginSignUpButton;
