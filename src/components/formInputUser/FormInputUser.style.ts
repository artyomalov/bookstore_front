import styled from 'styled-components';

type FormInputType = {
  value: string;
  blocked: number;
};



const StyledFormInputUser = styled.div<FormInputType>`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  position: relative;

  .form-input__input-item {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${(props) => props.theme.colorLight};
    border-radius: ${(props) => props.theme.borderRadius};
    pointer-events: ${(props) => (props.blocked === 1 ? 'none' : 'auto')};
  }

  .from-input__input-item-blocked {
    cursor: not-allowed;
  }

  

  .form-input__input {
    width: 95%;
    height: 50%;
    position: absolute;
    top: ${(props) => (props.value.length > 0 ? '30px' : '16px')};
    left: 84px;
    background: none;
    border: none;
    font-size: ${(props) => props.theme.fontSize16};
    font-weight: ${(props) => props.theme.fontWeightThin};
    font-size: ${(props) => props.theme.fontSize16};
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
    font-weight: ${(props) => props.theme.fontWeightMedium};
    font-size: ${(props)=>props.theme.fontSize14};
    top: 8px;
    left: 84px;
    font-size: 14px;
    transition: ${(props) => props.theme.transitionStyle};
  }

  .form-input__explanation {
    margin-top: 9px;
    font-size: ${(props) => props.theme.fontSize14};
    font-weight: ${(props) => props.theme.fontWeightMedium};
  }
`;

export default StyledFormInputUser;
