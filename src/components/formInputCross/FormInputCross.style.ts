import styled from 'styled-components';

const deleteButtonProps = {
  top: '14px',
  right: '5px',
  crossColor: 'rgb(185, 186, 196)',
  crossWidth: '20px',
  crossHeight: '3px',
};

type StyledFormInputCrossProps = {
  value: string;
  blocked: number;
};

const StyledFormInputCross = styled.span<StyledFormInputCrossProps>`
  opacity: ${(props) =>
    props.value.length > 0 && props.blocked !== 1 ? 1 : 0};
  border: none;
  width: 30px;
  height: 30px;
  transition: ${(props) => props.theme.transitionStyle};
  position: absolute;
  top: 17px;
  right: 17px;
  z-index: 999;
  pointer-events: ${(props) => (props.blocked === 1 ? 'none' : 'auto')};

  cursor: pointer;
  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: ${deleteButtonProps.crossWidth};
    height: ${deleteButtonProps.crossHeight};
    background-color: ${deleteButtonProps.crossColor};
    position: absolute;
    top: ${deleteButtonProps.top};
    right: ${deleteButtonProps.right};
    transition: ${(props) => props.theme.transitionStyle};
  }
  &::after {
    transform: rotate(-45deg);
  }
  &::before {
    transform: rotate(45deg);
  }

  &:hover {
    &::before {
      transform: rotate(0deg);
    }
    &::after {
      transform: rotate(0deg);
    }
  }
`;

export default StyledFormInputCross;
