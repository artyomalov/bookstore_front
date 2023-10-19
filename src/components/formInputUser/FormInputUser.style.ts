import styled from 'styled-components';

type FormInputType = {
  value: string;
  blocked: number;
};

const deleteButtonProps = {
  top: '14px',
  right: '5px',
  crossColor: 'rgb(185, 186, 196)',
  crossWidth: '20px',
  crossHeight: '3px',
};

const StyledFormInputUser = styled.div<FormInputType>`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  position: relative;

  .form-input__input-item {
    width: 100%;
    height: 84px;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colorLight};
    border-radius: ${(props) => props.theme.borderRadius};
    pointer-events: ${(props) => (props.blocked === 1 ? 'none' : 'auto')};
  }

  .from-input__input-item-blocked {
    cursor: not-allowed;
  }

  .form-input__clear-button {
    opacity: ${(props) =>
      props.value.length > 0 && props.blocked !== 1 ? 1 : 0};
    border: none;
    width: 30px;
    height: 30px;
    transition: ${(props) => props.theme.transitionStyle};
    position: absolute;
    top: 22%;
    right: 5%;
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
  }

  .form-input__input {
    width: 95%;
    height: 50%;
    position: absolute;
    top: ${(props) => (props.value.length > 0 ? '20%' : '11%')};
    left: 16%;
    background: none;
    border: none;
    font-size: ${(props) => props.theme.fontSizeNormal};
    font-weight: ${(props) => props.theme.fontWeightThin};
    font-size: ${(props) => props.theme.fontSizeSmall};
    transition: ${(props) => props.theme.transitionStyle};

    &:focus {
      outline: none;
      outline-offset: none;
    }
  }

  .form-input__img {
    margin-left: 5%;
    width: 7%;
  }

  .form-input__additional-text {
    display: inline-block;
    opacity: ${(props) => (props.value.length > 0 ? 1 : 0)};
    position: absolute;
    font-weight: ${(props) => props.theme.fontWeightNormal};
    top: 15%;
    left: 16%;
    font-size: 14px;
    transition: ${(props) => props.theme.transitionStyle};
  }

  .form-input-explanation {
    font-size: ${(props) => props.theme.fontSizeLittle};
    font-weight: ${(props) => props.theme.fontWeightNormal};
  }
`;

export default StyledFormInputUser;
