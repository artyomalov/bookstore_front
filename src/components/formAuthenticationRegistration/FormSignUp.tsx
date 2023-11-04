import React from 'react';
import { useFormik } from 'formik';
import StyledhForm from './Form.style';
import FormInput from '../formInput/FormInput';
import authMail from '../../assets/img/auth_mail.svg';
import authHide from '../../assets/img/auth_hide.svg';
import { validationSchemaSignUp } from '../../validationSchemas/loginSignupSchema';
import userRequests from '../../api/userAPI/userRequests';
import { useLocation, useNavigate } from 'react-router';
const Signup = 'Sign up';

const FormSignUp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const fromPage = location.state?.state?.pathname || '/';
  type ValuesType = {
    email: string;
    password: string;
    repeatPassword: string;
  };

  const onSubmitHandler = async (values: ValuesType) => {
    try {
      const response = await userRequests.createUser({
        email: values.email,
        password: values.password,
        confirmPassword: values.repeatPassword,
      });

      navigate('/login', { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: validationSchemaSignUp,
    onSubmit: onSubmitHandler,
  });
  return (
    <StyledhForm>
      <h2 className="auth-component__header">{Signup}</h2>
      <form
        className="auth-component__form"
        onSubmit={formik.handleSubmit}
        autoComplete="new-password"
      >
        <FormInput
          title="email"
          type="email"
          name="email"
          explanation="Enter your email"
          image={authMail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          setFieldValue={formik.setFieldValue}
          value={formik.values.email}
          inputTouched={formik.touched.email}
          inputError={formik.errors.email}
        />
        <FormInput
          title="password"
          type="password"
          name="password"
          explanation="Enter your password"
          image={authHide}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          setFieldValue={formik.setFieldValue}
          value={formik.values.password}
          inputTouched={formik.touched.password}
          inputError={formik.errors.password}
        />
        <FormInput
          title="repeat password"
          type="password"
          name="repeatPassword"
          explanation="Repeat your password"
          image={authHide}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          setFieldValue={formik.setFieldValue}
          value={formik.values.repeatPassword}
          inputTouched={formik.touched.repeatPassword}
          inputError={formik.errors.repeatPassword}
        />
        <button type="submit" className="auth-component__button">
          {Signup}
        </button>
      </form>
    </StyledhForm>
  );
};

export default FormSignUp;
