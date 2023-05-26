import React from 'react';
import { useFormik } from 'formik';
import StyledAuthForm from './AuthForm.style';
import FormInput from './FormInput';
import authMail from '../assets/img/auth_mail.svg';
import authHide from '../assets/img/auth_hide.svg';
import validationSchema from '../validationSchemas/loginSignupSchema';


const logIn = 'Log in';


const AuthFormLogin: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values.email, values.password);
    },
  });
  return (
    <StyledAuthForm>
      <h2 className="authComponentHeader">{logIn}</h2>
      <form onSubmit={formik.handleSubmit} autoComplete="new-password">
        <FormInput
          title="email"
          type="email"
          explanation="Enter your email"
          image={authMail}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          setFieldValue={formik.setFieldValue}
          value={formik.values.email}
          formikTouched={formik.touched.email}
          formikError={formik.errors.email}
        />
        <FormInput
          title="password"
          type="password"
          explanation="Enter your password"
          image={authHide}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          setFieldValue={formik.setFieldValue}
          value={formik.values.password}
          formikTouched={formik.touched.password}
          formikError={formik.errors.password}
        />
        <button type="submit" className="authComponentButton">
          {logIn}
        </button>
      </form>
    </StyledAuthForm>
  );
};

export default AuthFormLogin;
