import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required('Required'),
  password: Yup.string().min(8, 'Too Short!').max(10, 'Too Long!').required('Required'),
});
