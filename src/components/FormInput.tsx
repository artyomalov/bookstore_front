import React from 'react';
import StyledFormInput from './FormInput.style';
// import InputFields from '../types/formTypes';

type InputFields = {
  title: string;
  type: string;
  explanation: string;
  image: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  value: string;
  formikTouched: boolean | undefined;
  formikError: string | undefined;
};

const FormInput: React.FC<InputFields> = (props) => {
  const clearInputHandler = () => {
    props.setFieldValue(props.type, '')
  };

  return (
    <StyledFormInput value={props.value}>
      <label className="form-input__input-item">
        <img className="form-input__img" src={props.image} />
        <input
          autoComplete="new-password"
          className="form-input__input"
          id={props.type}
          name={props.type}
          type={props.explanation.replace(' ', '')}
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
      {props.formikTouched && props.formikError ? (
        <p className="form-input-explanation">{props.formikError}</p>
      ) : (
        <p className="form-input-explanation">{props.explanation}</p>
      )}
    </StyledFormInput>
  );
};

export default FormInput;

