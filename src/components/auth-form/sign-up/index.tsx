import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, FormikHelpers } from 'formik';
import { Box, Button } from '@mui/material';

import { AppDispatch } from 'store';
import { register } from 'store/slices/user';
import { selectUser } from 'store/selectors/user';

import { errorNotification } from 'utils/notification';

import { FormikField } from 'components/ui/formik-filed';

import { IRegister } from 'services/auth/Auth.types';

import {
  SIGN_UP_FORM_FIELDS,
  SIGN_UP_FORM_INITIAL_VALUES,
  VALIDATION_SCHEMA,
} from './config';
import { routes } from 'constants/routes';

export const SignUp: FC = () => {
  const { isLoading } = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const handleRegister = async (values: IRegister) => {
    try {
      await dispatch(register(values)).unwrap();
      navigate(routes.auth);
    } catch (error) {
      errorNotification(error);
    }
  };

  const handleSubmitForm = (
    values: typeof SIGN_UP_FORM_INITIAL_VALUES,
    helpers: FormikHelpers<typeof SIGN_UP_FORM_INITIAL_VALUES>,
  ) => {
    const data: IRegister = {
      displayName: values.displayName,
      password: values.password,
      username: values.username,
    };
    handleRegister(data);
  };

  return (
    <Formik
      validateOnBlur
      validationSchema={VALIDATION_SCHEMA}
      initialValues={SIGN_UP_FORM_INITIAL_VALUES}
      onSubmit={handleSubmitForm}
    >
      {({ handleSubmit, errors, touched }) => {
        return (
          <Box mt={6}>
            {SIGN_UP_FORM_FIELDS.map((field, index: number) => (
              <Box key={field.name} mt={3}>
                <FormikField
                  label={field.placeholder}
                  type={field.type}
                  name={field.name}
                  errors={errors}
                  touched={touched}
                />
              </Box>
            ))}
            <Box mt={4}>
              <Button
                id="signUp"
                type="submit"
                variant="contained"
                color="primary"
                disabled={isLoading}
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
};
