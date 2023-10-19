import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 196px;
  height: 48px;
  background-color: ${(props) => props.theme.colorLight};
  color: ${(props) => props.theme.colorDarkBlue};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: ${(props)=>props.theme.fontSizeSmall};
  cursor: pointer;

  .button__arrow {
    display: block;
    width: 10px;
    height: 10px;
    border-left: 2px solid ${(props) => props.theme.colorDarkBlue};
    border-bottom: 2px solid ${(props) => props.theme.colorDarkBlue};
    transform: scale(1, 0.9) rotate(-45deg);
  }
`;

export default StyledButton