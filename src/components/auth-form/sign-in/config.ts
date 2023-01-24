import * as yup from 'yup';

export const SIGN_IN_FORM_FIELD_NAMES = {
  username: 'username',
  password: 'password',
};

export const SIGN_IN_FORM_INITIAL_VALUES = {
  [SIGN_IN_FORM_FIELD_NAMES.username]: '',
  [SIGN_IN_FORM_FIELD_NAMES.password]: '',
};

export const SIGN_IN_FORM_FIELDS = [
  {
    name: SIGN_IN_FORM_FIELD_NAMES.username,
    type: 'text',
    placeholder: 'User Name',
  },
  {
    name: SIGN_IN_FORM_FIELD_NAMES.password,
    type: 'password',
    placeholder: 'Password',
  },
];

export const VALIDATION_SCHEMA = yup.object().shape({
  [SIGN_IN_FORM_FIELD_NAMES.username]: yup
    .string()
    .trim()
    .required('User Name is required'),
  [SIGN_IN_FORM_FIELD_NAMES.password]: yup
    .string()
    .required('Password is required'),
});
