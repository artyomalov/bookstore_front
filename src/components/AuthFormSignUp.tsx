import React from 'react';
import { useFormik } from 'formik';
import StyledAuthForm from './AuthForm.style';
import FormInput from './FormInput';
import authMail from '../assets/img/auth_mail.svg';
import authHide from '../assets/img/auth_hide.svg';
import validationSchema from '../validationSchemas/loginSignupSchema';
import { useAppDispatch } from '../store/userHooks';
import userRequests from '../api/userAPI/userRequests';
import { useLocation, useNavigate } from 'react-router';

const logIn = 'Log in';

const AuthFormSignUp: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.state?.pathname || '/';
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const email = values.email;
      const password = values.password;
      const confirmPassword = values.repeatPassword;
      userRequests.createUser({
        email,
        password,
        confirmPassword,
      });
      navigate(fromPage, { replace: true });
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
        <FormInput
          title="repeat password"
          type="password"
          explanation="Repeat your password"
          image={authHide}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          setFieldValue={formik.setFieldValue}
          value={formik.values.repeatPassword}
          formikTouched={formik.touched.repeatPassword}
          formikError={formik.errors.repeatPassword}
        />
        <button type="submit" className="authComponentButton">
          {logIn}
        </button>
      </form>
    </StyledAuthForm>
  );
};

export default AuthFormSignUp;
