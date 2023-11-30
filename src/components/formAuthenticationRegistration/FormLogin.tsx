import React from 'react';
import { useFormik } from 'formik';
import { useNavigate, useLocation } from 'react-router';
import StyledForm from './Form.style';
import FormInput from '../formInput/FormInput';
import authMail from '../../assets/img/auth_mail.svg';
import authHide from '../../assets/img/auth_hide.svg';
import { validationSchemaLogIn } from '../../validationSchemas/loginSignupSchema';
import { useAppDispatch } from '../../store/typedHooks';
import { setUser } from '../../store/userSlice';
import userRequests from '../../api/userAPI/userRequests';
import { getLikedBooks, getUserCart } from '../../store/userStaffSlice';

const logIn = 'Log in';

const FormLogin: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';
  const dispatch = useAppDispatch();

  type LoginHandlerDataType = {
    email: string;
    password: string;
  };

  const logInUserHandler = async (values: LoginHandlerDataType) => {
    try {
      const response = await userRequests.signInUser(
        values.email,
        values.password
      );

      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      dispatch(setUser(response.data.user_data));
      localStorage.setItem('access', response.data.token_data.access);
      localStorage.setItem('refresh', response.data.token_data.refresh);
      await dispatch(getLikedBooks());
      await dispatch(getUserCart());
      navigate(fromPage, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchemaLogIn,
    onSubmit: (values) => {
      logInUserHandler(values);
    },
  });
  return (
    <StyledForm>
      <h2 className="auth-component__header">{logIn}</h2>
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
        <button type="submit" className="auth-component__button">
          {logIn}
        </button>
      </form>
    </StyledForm>
  );
};

export default FormLogin;
