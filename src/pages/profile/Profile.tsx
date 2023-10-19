import React from 'react';
import * as yup from 'yup';
import FormInputUser from '../../components/formInputUser/FormInputUser';
import { useFormik } from 'formik';
import { validationSchemaUserProfile } from '../../validationSchemas/loginSignupSchema';
import StyledProfileDataContainer from './Profile.style';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import { setIsError, setMessage, updateUserData } from '../../store/userSlice';
import userRequests from '../../api/userAPI/userRequests';
import authMail from '../../assets/img/auth_mail.svg';
import authHide from '../../assets/img/auth_hide.svg';
import userProfileAddPhoto from '../../assets/img/user_profile_add_photo.svg';
import userProfileLogo from '../../assets/img/user_profile_input.svg';
import default_avatar from '../../assets/img/default_avatar.svg';
import user_name_input_logo from '../../assets/img/user_profile_input.svg';

const Profile: React.FC = () => {
  const [changeDataFlag, setChangeDataFlag] = React.useState(false);
  const [changePasswordFlag, setChangePasswordFlag] = React.useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const errorMessage = useAppSelector((state) => state.user.message);

  const formik = useFormik({
    initialValues: {
      avatar: '',
      fullName: user.fullName,
      email: user.email,
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
    },
    // validationSchema: validationSchemaUserProfile,
    onSubmit: async (values) => {
      const updatedUserData = {
        email: values.email,
        fullName: values.fullName,
        avatar: values.avatar,
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };
      await dispatch(updateUserData(updatedUserData)).unwrap();
      setChangeDataFlag(false);
      setChangePasswordFlag(false);
    },
  });

  const setEmailFlagHandler = (
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  ) => {
    setFieldValue('fullName', user.fullName);
    setFieldValue('email', user.email);
    setChangeDataFlag((prev) => !prev);
  };

  const setPasswordFlagHandler = (
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  ) => {
    setChangePasswordFlag((prev) => !prev);
    setFieldValue('oldPassword', '');
    setFieldValue('newPassword', '');
    setFieldValue('repeatPassword', '');
  };

  return (
    <StyledProfileDataContainer
      passwordflag={changePasswordFlag ? 1 : 0}
      onSubmit={formik.handleSubmit}
    >
      <div className="user-page__container">
        <div className="user-page__avatar">
          <img
            className="user-page__avatar-image"
            src={default_avatar}
            alt="avatar_image"
          />
          <label className="user-page__add-photo-icon-container">
            <img
              src={userProfileAddPhoto}
              className="user-page__add-photo-icon"
              alt="addPhoto"
            />
            <input
              type="file"
              accept="image/*,image/jpeg"
              className="user-page__add-photo-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.currentTarget.files !== null) {
                  formik.setFieldValue('avatar', e.currentTarget.files[0]);
                  // console.log(e.currentTarget.files[0]);
                }
              }}
            />
          </label>
        </div>
        <div className="user-page__text-form">
          <div className="user-page__header-container">
            <h5 className="user-page__header">Personal information</h5>
            <button
              type="button"
              className="user-page__change-data-button"
              onClick={() => setEmailFlagHandler(formik.setFieldValue)}
            >
              Change information
            </button>
          </div>
          <FormInputUser
            title="Your name"
            type="text"
            name="fullName"
            explanation=" "
            image={authMail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            setFieldValue={formik.setFieldValue}
            value={formik.values.fullName}
            inputTouched={formik.touched.fullName}
            inputError={formik.errors.fullName}
            blocked={changeDataFlag}
          />
          <FormInputUser
            title="Your email"
            type="email"
            name="email"
            explanation=" "
            image={userProfileLogo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            setFieldValue={formik.setFieldValue}
            value={formik.values.email}
            inputTouched={formik.touched.email}
            inputError={formik.errors.email}
            blocked={changeDataFlag}
          />
          <div className="user-page__header-container">
            <h5 className="user-page__header">Password</h5>
            <button
              type="button"
              className="user-page__change-data-button"
              onClick={() => setPasswordFlagHandler(formik.setFieldValue)}
            >
              Change password
            </button>
          </div>
          <FormInputUser
            title="Old password"
            type="password"
            name="oldPassword"
            explanation=" "
            image={authHide}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            setFieldValue={formik.setFieldValue}
            value={formik.values.oldPassword}
            inputTouched={formik.touched.oldPassword}
            inputError={formik.errors.oldPassword}
            blocked={changePasswordFlag}
          />
          <div className="user-page__password-update-fields">
            <FormInputUser
              title="New password"
              type="password"
              name="newPassword"
              explanation="Enter your password"
              image={authHide}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              setFieldValue={formik.setFieldValue}
              value={formik.values.newPassword}
              inputTouched={formik.touched.newPassword}
              inputError={formik.errors.newPassword}
              blocked={changePasswordFlag}
            />
            <FormInputUser
              title="Repeat password"
              type="password"
              name="repeatPassword"
              explanation="Repeat your password without errors  "
              image={authHide}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              setFieldValue={formik.setFieldValue}
              value={formik.values.repeatPassword}
              inputTouched={formik.touched.repeatPassword}
              inputError={formik.errors.repeatPassword}
              blocked={changePasswordFlag}
            />
          </div>
          <button type="submit" className="user-page__confirm">
            Confirm
          </button>
        </div>
      </div>
    </StyledProfileDataContainer>
  );
};

export default Profile;
