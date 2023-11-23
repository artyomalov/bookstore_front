import styled from 'styled-components';

const StyledHeaderSearchField = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  padding-left: 2%;
  background-color: ${(props) => props.theme.colorLight};
  display: flex;
  align-items: center;
  .header__input {
    width: 95%;
    height: 100%;
    padding-left: 2%;
    background: none;
    border: none;
    font-size: ${(props) => props.theme.fontSizeNormal};
    font-weight: ${(props) => props.theme.fontWeightThin};

    &:focus {
      outline: none;
      outline-offset: none;
    }
  }
`;



export default StyledHeaderSearchField