import * as Yup from 'yup';
import { LoginSchema } from '../login/login-schema';

export const RegisterSchema = LoginSchema.concat(
  Yup.object().shape({
    fullName: Yup.string().required(),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required()
      .min(8, 'Too Short!')
      .max(10, 'Too Long!'),
  })
);
