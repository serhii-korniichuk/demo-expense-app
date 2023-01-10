import * as Yup from 'yup';

const schema = Yup.object({
  username: Yup.string()
    .required('Required value...'),
  password: Yup.string()
    .required('Required value...'),
});

export default schema;