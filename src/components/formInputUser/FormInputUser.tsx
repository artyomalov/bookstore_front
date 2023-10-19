import React from 'react';
import StyledFormInputUser from './FormInputUser.style';

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
  blocked: boolean;
};

const FormInputUser: React.FC<InputFields> = (props) => {
  const clearInputHandler = () => {
    props.setFieldValue(props.name, '');
  };
  return (
    <StyledFormInputUser
      value={props.value}
      blocked={props.blocked === false ? 1 : 0}
    >
      <label
        className={
          props.blocked === false
            ? 'form-input__input-item from-input__input-item-blocked'
            : 'form-input__input-item'
        }
      >
        <img className="form-input__img" src={props.image} />
        <span className="form-input__additional-text">{props.title}</span>
        <input
          autoComplete="new-password"
          id={props.title.replace(' ', '')} //изменения относительно оригинального инпута. Было explanation
          className="form-input__input"
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
    </StyledFormInputUser>
  );
};

export default FormInputUser;
