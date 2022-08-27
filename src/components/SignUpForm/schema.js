import * as Yup from 'yup';

const schema = Yup.object({
  name: Yup.string()
    .min(4, 'Too short value...')
    .required('Required value...'),
  username: Yup.string()
    .min(4, 'Too short value...')
    .required('Required value...'),
  email: Yup.string()
    .email('Incorrect email format...'),
  password: Yup.string()
    .min(6, 'Min length 6 symbols...')
    .required('Required value...'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match...')
    .required('Required value...'),
});

export default schema;