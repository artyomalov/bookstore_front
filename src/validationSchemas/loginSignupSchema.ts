import * as Yup from 'yup'

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(
        /[a-zA-Z0-9]/,
        'Password can only contain Latin letters and numbers.'
      ),
  });


  export default validationSchema