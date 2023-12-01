import React from 'react';
import * as yup from 'yup';
import FormInputUser from '../../components/formInputUser/FormInputUser';
import { FormikValues, useFormik } from 'formik';
import { validationSchemaUserProfile } from '../../validationSchemas/loginSignupSchema';
import StyledProfileDataContainer from './Profile.style';
import { useAppDispatch, useAppSelector } from '../../store/typedHooks';
import { updateUserData } from '../../store/userSlice';
import authMail from '../../assets/img/auth_mail.svg';
import authHide from '../../assets/img/auth_hide.svg';
import userProfileAddPhoto from '../../assets/img/user_profile_add_photo.svg';
import userProfileLogo from '../../assets/img/user_profile_input.svg';
import mediaBaseUrl from '../../const/mediaBaseUrl';

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const [changeDataFlag, setChangeDataFlag] = React.useState<boolean>(false);
  const [changePasswordFlag, setChangePasswordFlag] =
    React.useState<boolean>(false);
  const [changeAvatarFlag, setChangeAvatarFlag] =
    React.useState<boolean>(false);
  const initialUserAvatar = mediaBaseUrl+user.avatar
  const formik = useFormik({
    initialValues: {
      email: user.email,
      fullName: user.fullName,
      avatar: initialUserAvatar,
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
    },
    // validationSchema: validationSchemaUserProfile,
    onSubmit: async (values) => {
      const updatedUserData: {
        email: string;
        fullName: string;
        avatar: string;
        oldPassword: string;
        newPassword: string;
      } = {
        email: values.email,
        fullName: values.fullName,
        avatar: values.avatar,
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };

      await dispatch(updateUserData(updatedUserData));
      setChangeDataFlag(false);
      setChangePasswordFlag(false);
      setChangeAvatarFlag(false);
    },
  });

  const setEmailFlagHandler = () => {
    formik.setFieldValue('fullName', user.fullName);
    formik.setFieldValue('email', user.email);
    setChangeDataFlag((prev) => !prev);
  };

  const setPasswordFlagHandler = () => {
    setChangePasswordFlag((prev) => !prev);
    formik.setFieldValue('oldPassword', '');
    formik.setFieldValue('newPassword', '');
    formik.setFieldValue('repeatPassword', '');
  };
  const setAvatarHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files !== null) {
      const reader = new FileReader();
      if (e.currentTarget.files[0] === undefined) return;

      reader.readAsDataURL(e.currentTarget.files[0]);
      reader.onload = () => {
        if (reader.result !== null && typeof reader.result === 'string') {
          const base64String = reader.result;
          formik.setFieldValue('avatar', base64String);
        }
        setChangeAvatarFlag(true);
      };
    }
  };
  return (
    <StyledProfileDataContainer onSubmit={formik.handleSubmit}>
      <div className="user-page__container">
        <div className="user-page__avatar">
          <img
            className="user-page__avatar-image"
            src={formik.values.avatar}
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
              onChange={setAvatarHandler}
            />
          </label>
          {/* <FormInputCross /> */}
        </div>
        <div className="user-page__text-form">
          <div className="user-page__header-container">
            <h5 className="user-page__header">Personal information</h5>
            <button
              type="button"
              className="user-page__change-data-button"
              onClick={setEmailFlagHandler}
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
            inputValue={formik.values.fullName}
            inputTouched={formik.touched.fullName}
            inputError={formik.errors.fullName}
            inputBlocked={changeDataFlag}
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
            inputValue={formik.values.email}
            inputTouched={formik.touched.email}
            inputError={formik.errors.email}
            inputBlocked={changeDataFlag}
          />
          <div className="user-page__header-container">
            <h5 className="user-page__header">Password</h5>
            <button
              type="button"
              className="user-page__change-data-button"
              onClick={setPasswordFlagHandler}
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
            inputValue={formik.values.oldPassword}
            inputTouched={formik.touched.oldPassword}
            inputError={formik.errors.oldPassword}
            inputBlocked={changePasswordFlag}
          />
          {changePasswordFlag ? (
            <>
              <FormInputUser
                title="New password"
                type="password"
                name="newPassword"
                explanation="Enter your password"
                image={authHide}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                setFieldValue={formik.setFieldValue}
                inputValue={formik.values.newPassword}
                inputTouched={formik.touched.newPassword}
                inputError={formik.errors.newPassword}
                inputBlocked={changePasswordFlag}
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
                inputValue={formik.values.repeatPassword}
                inputTouched={formik.touched.repeatPassword}
                inputError={formik.errors.repeatPassword}
                inputBlocked={changePasswordFlag}
              />
            </>
          ) : null}
          {changeDataFlag === true ||
          changePasswordFlag === true ||
          changeAvatarFlag === true ? (
            <button type="submit" className="user-page__confirm">
              Confirm
            </button>
          ) : null}
        </div>
      </div>
    </StyledProfileDataContainer>
  );
};

export default Profile;
