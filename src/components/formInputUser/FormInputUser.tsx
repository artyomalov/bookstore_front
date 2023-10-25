import React from 'react';
import StyledFormInputUser from './FormInputUser.style';
import FormInputCross from '../formInputCross/FormInputCross';
type Props = {
  title: string;
  name: string;
  type: string;
  explanation: string;
  image: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  inputValue: string;
  inputTouched: boolean | undefined;
  inputError: string | undefined;
  inputBlocked: boolean;
};

const FormInputUser: React.FC<Props> = (props) => {
  const clearInputHandler = () => {
    props.setFieldValue(props.name, '');
  };
  return (
    <StyledFormInputUser
      value={props.inputValue}
      blocked={props.inputBlocked === false ? 1 : 0}
    >
      <label
        className={
          props.inputBlocked === false
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
          value={props.inputValue}
        />
        <FormInputCross
          inputValue={props.inputValue}
          inputBlocked={props.inputBlocked}
          clickCrossHandler={clearInputHandler}
        />
      </label>
      {props.inputTouched && props.inputError ? (
        <p className="form-input__explanation">{props.inputError}</p>
      ) : (
        <p className="form-input__explanation">{props.explanation}</p>
      )}
    </StyledFormInputUser>
  );
};

export default FormInputUser;
