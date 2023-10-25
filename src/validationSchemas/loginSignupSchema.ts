import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordNotContainErrorMessage =
  'Password must only contain Latin letters and numbers. Password must contain at list one captal letter and one number';
const passwordIsTooShortErrorMessage =
  'Password is too short - should be 8 chars minimum.';

const validationSchemaSignUp = yup.object({
  email: yup.string().email('Invalid email address').required('Enter your email'),
  password: yup
    .string()
    // .required('No password provided.')
    // .min(8, passwordIsTooShortErrorMessage)
    // .matches(passwordRules, passwordNotContainErrorMessage)
    ,
  repeatPassword: yup
    .string()
    // .required('No password provided.')
    // .min(8, passwordIsTooShortErrorMessage)
    // .matches(passwordRules, passwordNotContainErrorMessage)
    // .oneOf(
    //   [yup.ref('password'), 'Passwords must match'],
    //   'Passwords must match'
    // )
    ,
});

const validationSchemaLogIn = yup.object({
  email: yup.string().email('Invalid email address').required('Required'),
  password: yup
    .string()
    // .required('No password provided.')
    // .min(8, passwordIsTooShortErrorMessage)
    // .matches(passwordRules, passwordNotContainErrorMessage)
    ,
});

const validationSchemaUserProfile = yup.object({
  email: yup.string().email('Invalid email address').required('Required'),
  oldPassword: yup
    .string()
    // .min(8, passwordIsTooShortErrorMessage)
    // .matches(passwordRules, passwordNotContainErrorMessage)
    ,
  newPassword: yup
    .string()
    // .min(8, passwordIsTooShortErrorMessage)
    // .matches(passwordRules, passwordNotContainErrorMessage)
    ,
  repeatPassword: yup
    .string()
    // .min(8, passwordIsTooShortErrorMessage)
    // .matches(passwordRules, passwordNotContainErrorMessage)
    // .oneOf(
    //   [yup.ref('newPassword'), 'Passwords must match'],
    //   'Passwords must match'
    // )
    ,
});

export {
  validationSchemaLogIn,
  validationSchemaSignUp,
  validationSchemaUserProfile,
};
