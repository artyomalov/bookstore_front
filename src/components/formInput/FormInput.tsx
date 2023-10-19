import React from 'react';
import StyledFormInput from './FormInput.style';
// import InputFields from '../types/formTypes';

type InputFields = {
  title: string;
  name: string;
  type: string;
  explanation: string;
  image: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  value: string;
  inputTouched: boolean | undefined;
  inputError: string | undefined;
};

const FormInput: React.FC<InputFields> = (props) => {
  const clearInputHandler = () => {
    props.setFieldValue(props.type, '');
  };

  return (
    <StyledFormInput value={props.value}>
      <label className="form-input__input-item">
        <img className="form-input__img" src={props.image} />
        <input
          autoComplete="new-password"
          className="form-input__input"
          id={props.explanation.replace(' ', '')}
          name={props.name}
          type={props.type}
          placeholder={props.title}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
        />
      </label>
      <span
        onClick={clearInputHandler}
        className="form-input__clear-button"
      ></span>
      {props.inputTouched && props.inputError ? (
        <p className="form-input__explanation">{props.inputError}</p>
      ) : (
        <p className="form-input__explanation">{props.explanation}</p>
      )}
    </StyledFormInput>
  );
};

export default FormInput;
