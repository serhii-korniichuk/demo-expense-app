import React from 'react'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import {authThunk} from "../../Reducers/authReducer";
import {store} from "../../Reducers/store";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import classes from "../../Style/SignInUp.module.scss";

export const SignUp = () => {
    const dispatch = store.dispatch

    type FormikErrorType = {
        password?: string
        username?: string
        displayName?: string
        confirmPassword?: string
    }

    const formik = useFormik({
        initialValues: {
            password: "",
            username: "",
            displayName: "",
            confirmPassword: ""
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.displayName) {
                errors.displayName = "Required";
            } else if (values.displayName.length < 3) {
                errors.displayName = "Put more then 3 symbols, please.";
            } else if (!values.displayName) {
                errors.displayName = "Symbol required!";
            }
            if (!values.username) {
                errors.username = "Required";
            } else if (values.username.length < 3) {
                errors.username = "Put more then 3 symbols, please.";
            } else if (!values.username) {
                errors.username = "Symbol required!";
            }
            if (!values.password) {
                errors.password = "Required";
            } else if (values.password.length < 8) {
                errors.password = "Put more then 8 symbols, please.";
            } else if (!values.password) {
                errors.password = "Symbol required!";
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = "Password not matched"
            }
            if(values.confirmPassword.length < 8) {
                errors.confirmPassword = "Put more then 8 symbols, please."
            }
            return errors
        },
        onSubmit: values => {
            let authData = {
                username: values.username,
                password: values.password,
                displayName: values.displayName,
            }
            dispatch(authThunk(authData) as any);
            formik.resetForm()
        },
    })

    return (
        <div className={classes.block}>
            <div className={classes.inCodeLogo}>
                <div className={`${classes.inCodeLogoText} ${classes.gapHeader}`}>InCode</div>
                <div className={`${classes.finance} ${classes.gapHeader}`}>Finance</div>
                <h1 className={classes.signIn}>SIGN UP</h1>
            </div>

            <Grid container justifyContent={"center"}>
                <Grid item justifyContent={"center"}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormGroup>
                                <TextField focused inputProps={{style: {color: "white"}}} color={"success"}
                                           label="DisplayName"
                                           variant="standard" margin="normal" {...formik.getFieldProps("displayName")}/>
                                {formik.touched.displayName &&
                                formik.errors.displayName ?
                                    <div style={{color: "#f03045"}}>{formik.errors.displayName}</div> : null}

                                <TextField focused inputProps={{style: {color: "white"}}} color={"success"}
                                           variant="standard"
                                           label="Username" margin="normal" {...formik.getFieldProps("username")}/>
                                {formik.touched.username &&
                                formik.errors.username ?
                                    <div style={{color: "#f03045"}}>{formik.errors.username}</div> : null}

                                <TextField focused inputProps={{style: {color: "white"}}} color={"success"}
                                           type="password" label="Password"
                                           variant="standard" margin="normal" {...formik.getFieldProps("password")}
                                />
                                {formik.touched.password &&
                                formik.errors.password ?
                                    <div style={{color: "#f03045"}}>{formik.errors.password}</div> : null}

                                <TextField focused inputProps={{style: {color: "white"}}} color={"success"}
                                           type="password" variant="standard" label="Confirm Password"
                                           margin="normal" {...formik.getFieldProps("confirmPassword")}
                                />
                                {formik.touched.confirmPassword &&
                                formik.errors.confirmPassword ?
                                    <div style={{color: "#f03045"}}>{formik.errors.confirmPassword}</div> : null}

                                <Button style={{marginTop: "10px", marginBottom: "10px"}} type={"submit"}
                                        variant={"contained"} color={"success"}>
                                    Sign Up
                                </Button>
                                <span className={classes.textColor}>I have an account. <Link
                                    style={{textDecoration: "none", color: "#6b90cc"}} to={{pathname: "/"}}>Go to Sign In</Link> </span>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}
