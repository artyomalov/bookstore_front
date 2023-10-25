import styled from 'styled-components';

type StyledFilterShowHideFilterButtonType = {
  buttonbackgroundcolor: string;
  buttonarrowposition: string;
};

const StyledFilterShowHideFilterButton = styled.button<StyledFilterShowHideFilterButtonType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 196px;
  height: 48px;
  padding: 0 10% 0 10%;
  background: ${(props) =>
    props.buttonbackgroundcolor === 'green' ? props.theme.colorLight : 'none'};
  color: ${(props) =>
    props.buttonbackgroundcolor === 'green'
      ? props.theme.colorDarkBlue
      : props.theme.colorDark};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  font-size: ${(props) => props.theme.fontSizeMedium};
  cursor: pointer;

  .button__arrow {
    display: block;
    width: 12px;
    height: 12px;
    border-left: 2px solid ${(props) => props.theme.colorDarkBlue};
    border-bottom: 2px solid ${(props) => props.theme.colorDarkBlue};
    transform: scale(1, 0.9)
      ${(props) =>
        props.buttonarrowposition === 'closed'
          ? 'rotate(-135deg)'
          : 'rotate(-45deg)'};
    transition: ${(props) => props.theme.transitionStyle};
  }
`;

export default StyledFilterShowHideFilterButton;
