import React from "react";
import * as yup from "yup";
import Grid from '@mui/material/Unstable_Grid2'; 
import { Button } from "@mui/material";
import { useFormik } from 'formik';
import { loginUser } from "../../redux/store/auth";
import { useAppDispatch } from "../../redux/store/store.hooks";
import "../style.scss"; 
import { useNavigate } from "react-router-dom";
import { InputTextField } from "../../components/InputTextField";
import { InputPass } from "../../components/InputPass";

const validationSchema = yup.object({
  username: yup
    .string()
    .min(2, 'User Name should be of minimum 2 characters length')
    .required('User Name is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await dispatch(loginUser(values));
        formik.values.username = '';
        formik.values.password = '';
        await navigate('/')
      } catch (err) {
        console.error(err);
      }
    },
  });

  const redirectToCreateAcc = () => navigate('/signup');

  return(
    <Grid container spacing={2}>
      <Grid 
        lgOffset={4} 
        lg={4}
        mdOffset={4}
        md={4}
        xlOffset={4} 
        xl={4}
        xs={12}
        className='smallSizeMainContainer'
      >
        <h3 className="nameCompany InputTextField">InCode</h3>  
        <p className="companyType">Finance</p>
        <h1 className="loginHeader">Sign In</h1>
        <form onSubmit={formik.handleSubmit}>
          <Grid sx={{
            padding: 0,
            }}>
            <InputTextField
              name="username"
              className="InputTextField"
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
          <p className="createAccount">Don’t have account yet? 
          <span 
            style={{
              color: '#7FAAF0',
              cursor: 'pointer',
            }}
            onClick={redirectToCreateAcc}
            > New Account</span>
          </p>
      </Grid>  
    </Grid>
  );
}