import styled from 'styled-components';

type FormInputType = {
  value: string;
};

const deleteButtonProps = {
  top: '14px',
  right: '5px',
  crossColor: 'rgb(185, 186, 196)',
  crossWidth: '20px',
  crossHeight: '3px',
};

const StyledFormInput = styled.div<FormInputType>`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  position: relative;

  .form-input__input-item {
    width: 100%;
    height: 84px;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colorLight};
    border-radius: ${(props) => props.theme.borderRadius};
    &:has(.form-input__input:focus) {
      outline: 2px solid ${(props) => props.theme.colorDark};
    }
  }
  .form-input__clear-button {
    opacity: ${(props) => (props.value.length > 0 ? 1 : 0)};
    pointer-events: ${(props) => (props.value.length > 0 ? 'all' : 'none')};
    border: none;
    width: 30px;
    height: 30px;
    transition: ${(props) => props.theme.transitionStyle};
    position: absolute;
    top: 20%;
    right: 4%;
    z-index: 999;
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
    height: 100%;
    margin-left: 0.5%;
    padding-left: 2%; 
    background: none;
    border: none;
    font-size: ${(props) => props.theme.fontSizeNormal};
    font-weight: ${(props) => props.theme.fontWeightThin};
    font-size: ${(props) => props.theme.fontSizeSmall};

    &:focus {
      outline: none;
      outline-offset: none;
    }
  }

  .form-input__img {
    margin-left: 5%;
    width: 7%;
  }

  .form-input__explanation {
    font-size: ${(props) => props.theme.fontSizeLittle};
    font-weight: ${(props) => props.theme.fontWeightNormal};
  }
`;

export default StyledFormInput;
