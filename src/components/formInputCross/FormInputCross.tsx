import React from 'react';
import StyledFormInputCross from './FormInputCross.style';
type Props = {
  clickCrossHandler: () => void;
  inputValue: string;
  inputBlocked: boolean;
};

const FormInputCross: React.FC<Props> = (props) => {
  return (
    <StyledFormInputCross
      value={props.inputValue}
      blocked={props.inputBlocked ? 1 : 0}
      onClick={props.clickCrossHandler}
      className="form-input__clear-button"
    ></StyledFormInputCross>
  );
};

export default FormInputCross;
