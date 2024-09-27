import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import shortid from 'shortid';
import Button from 'components/Button/Button';
import { useLoginUserMutation } from 'redux/auth/auth-reducer';
import InputForm from 'components/InputForm';

const validateSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, 'Name is invalid')
    .min(2, 'Too Short!')
    .required('Username is required'),
  password: Yup.string()
    .min(6, 'Must contain at least 6 characters')
    .max(15, 'Must be no more than 15 characters!')
    .required('Password is required'),
});

export default function SignIn({ onClick }) {
  const [login] = useLoginUserMutation();

  return (
    <>
      <Title>Sign In</Title>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={validateSchema}
        onSubmit={(values, onSubmitProps) => {
          login(values);
          onSubmitProps.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <InputForm
                label="User Name"
                name="username"
                type="text"
                placeholder="Example123"
                title="Only letters and numbers"
                id={shortid.generate()}
              >
                {errors.username && touched.username ? (
                  <ErrorMessage>{errors.username}</ErrorMessage>
                ) : null}
              </InputForm>
              <InputForm
                label="Password"
                name="password"
                placeholder="***************"
                isPassword
                id={shortid.generate()}
              >
                {errors.password && touched.password ? (
                  <ErrorMessage>{errors.password}</ErrorMessage>
                ) : null}
              </InputForm>
            </div>
            <ButtonWrap>
              <Button type="submit" width="100%">
                Sign In
              </Button>
            </ButtonWrap>
          </Form>
        )}
      </Formik>

      <Text>
        Don’t have account yet? <span onClick={onClick}>New Account</span>
      </Text>
    </>
  );
}

const Title = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 1.5;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 72px;
  margin-bottom: 48px;
`;

const ErrorMessage = styled.div`
  position: absolute;
  bottom: -20px;
  font-size: 14px;
  color: red;
`;

const ButtonWrap = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;
`;

const Text = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.55;
  color: rgba(241, 242, 241, 1);

  span {
    color: rgba(127, 170, 240, 1);
  }
`;
