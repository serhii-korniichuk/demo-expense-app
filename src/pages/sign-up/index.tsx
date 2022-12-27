import React from "react";
import * as yup from "yup";
import { Button } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; 
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { InputPass } from "../../components/InputPass";
import { InputTextField } from "../../components/InputTextField";
import { useAppDispatch } from "../../redux/store/store.hooks";
import { registerUser } from "../../redux/store/auth";

import "../style.scss"; 

const validationSchema = yup.object({
  username: yup
    .string()
    .min(2, 'User Name should be of minimum 2 characters length')
    .required('User Name is required'),
  fullName: yup
    .string()
    .min(2, 'Full Name should be of minimum 2 characters length')
    .required('Full Name is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

export const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: '',
      username: '',
      password: '',
      confirmPassword : '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        dispatch(registerUser({
          fullName: values.fullName,
          password: values.password,
          username: values.username,
        }));
        formik.values.fullName = '';
        formik.values.password = '';
        formik.values.username = '';
        navigate('/signin')
      } catch (err) {
        console.error(err);
      }
    },
  });

  const redirectToCreateAcc = () => navigate('/signin');


  return(
    <Grid container spacing={2}>
      <Grid className='smallSizeMainContainer' lgOffset={4} lg={4} mdOffset={4} md={4} xlOffset={4} xl={4} xs={12}>
        <h3 className="nameCompany">InCode</h3>  
        <p className="companyType">Finance</p>
        <h1 className="loginHeader">Sign Up</h1>
        <form onSubmit={formik.handleSubmit}>
          <Grid sx={{
            padding: 0,
            }}>
            <InputTextField
              name="fullName"
              label="Full Name"
              type="text"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
            />
          </Grid>
          <Grid sx={{
            padding: 0,
            }}>
            <InputTextField
              name="username"
              label="User Name"
              type="text"
              variant="standard"
              onChange={formik.handleChange}
              value={formik.values.username}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Grid>
          <Grid sx={{padding: 0}}>
            <InputPass 
              formik={formik}
              label={'Password'}
              name={'password'}
            />
          </Grid>
          <Grid sx={{padding: 0}}>
            <InputPass 
              formik={formik}
              label={'Confirm Password'}
              name={'confirmPassword'}
            />
          </Grid>
          <Button 
            variant="contained"
            type="submit"
            sx={{
              width: '100%',
              backgroundColor: '#539713',
              height: 44,
              borderRadius: 0,
              marginTop: '8px',
              '&:hover': {backgroundColor: '#3c6b10'}
            }}
          >
            Login
          </Button>
          </form>
          <p className="createAccount">I have an account.
          <span 
            style={{
              color: '#7FAAF0',
              cursor: 'pointer',
            }}
            onClick={redirectToCreateAcc}
            > Go to Sign in</span>
          </p>
      </Grid>  
    </Grid>
  );
};
