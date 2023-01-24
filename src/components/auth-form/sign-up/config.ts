import * as yup from 'yup';

export const SIGN_UP_FORM_FIELD_NAMES = {
  displayName: 'displayName',
  username: 'username',
  password: 'password',
  confirmPassword: 'confirmPassword',
};

export const SIGN_UP_FORM_INITIAL_VALUES = {
  [SIGN_UP_FORM_FIELD_NAMES.displayName]: '',
  [SIGN_UP_FORM_FIELD_NAMES.username]: '',
  [SIGN_UP_FORM_FIELD_NAMES.password]: '',
  [SIGN_UP_FORM_FIELD_NAMES.confirmPassword]: '',
};

export const SIGN_UP_FORM_FIELDS = [
  {
    name: SIGN_UP_FORM_FIELD_NAMES.displayName,
    type: 'text',
    placeholder: 'Full Name',
  },
  {
    name: SIGN_UP_FORM_FIELD_NAMES.username,
    type: 'text',
    placeholder: 'User Name',
  },
  {
    name: SIGN_UP_FORM_FIELD_NAMES.password,
    type: 'password',
    placeholder: 'Password',
  },
  {
    name: SIGN_UP_FORM_FIELD_NAMES.confirmPassword,
    type: 'password',
    placeholder: 'Confirm Password',
  },
];

export const VALIDATION_SCHEMA = yup.object().shape({
  [SIGN_UP_FORM_FIELD_NAMES.displayName]: yup
    .string()
    .trim()
    .required('Full Name is required'),
  [SIGN_UP_FORM_FIELD_NAMES.username]: yup
    .string()
    .trim()
    .required('User Name is required'),
  [SIGN_UP_FORM_FIELD_NAMES.password]: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a special character'),
  [SIGN_UP_FORM_FIELD_NAMES.confirmPassword]: yup
    .string()
    .oneOf(
      [yup.ref(SIGN_UP_FORM_FIELD_NAMES.password)],
      'Passwords do not match',
    )
    .required('Сonfirm password is required'),
});
