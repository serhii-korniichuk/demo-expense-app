import {useSelector} from "react-redux";
import {AppRootStateType, store} from "../../Reducers/store";
import {useFormik} from "formik";
import {loginThunk} from "../../Reducers/authReducer";
import {Link, Navigate} from "react-router-dom";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import classes from "../../Style/SignInUp.module.scss"

export const SignIn = () => {
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.authReducer.isRegistered)
    const dispatch = store.dispatch

    type FormikErrorType = {
        username?: string
        password?: string
    }
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.username) {
                errors.username = "Required";
            } else if (values.username.length < 3) {
                errors.username = "Put more then 3 symbols, please.";
            } else if (!values.username) {
                errors.username = "Symbol required!";
            }
            if (!values.password) {
                errors.password = "Required";
            } else if (values.password.length < 3) {
                errors.password = "Put more then 3 symbols, please.";
            } else if (!values.password) {
                errors.password = "Symbol required!";
            }
            return errors
        },
        onSubmit: values => {
            dispatch(loginThunk(values) as any);
            formik.resetForm()
        },
    })

    if (isRegistered) {
        return <Navigate to={"home"}/>
    }
    return (
        <div className={classes.block}>
            <div className={classes.inCodeLogo}>
                <div className={`${classes.inCodeLogoText} ${classes.gapHeader}`}>InCode</div>
                <div className={`${classes.finance} ${classes.gapHeader}`}>Finance</div>
                <h1 className={classes.signIn}>SIGN IN</h1>
            </div>

            <Grid container justifyContent={"center"}>
                <Grid item justifyContent={"center"}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormGroup>
                                <TextField focused inputProps={{style: {color: "white"}}} color={"success"}
                                           variant="standard" label="Username"
                                           margin="normal" {...formik.getFieldProps("username")}/>
                                {formik.touched.username &&
                                formik.errors.username ?
                                    <div style={{color: "#f03045"}}>{formik.errors.username}</div> : null}

                                <TextField focused inputProps={{style: {color: "white"}}} color={"success"}
                                           variant="standard" type="password" label="Password"
                                           margin="normal" {...formik.getFieldProps("password")}
                                />
                                {formik.touched.password &&
                                formik.errors.password ?
                                    <div style={{color: "#f03045"}}>{formik.errors.password}</div> : null}

                                <Button style={{marginTop: "10px", marginBottom: "10px"}} type={"submit"}
                                        variant={"contained"} color={"success"}>
                                    Sign In
                                </Button>
                                <span className={classes.textColor}>Don't have account yet? <Link
                                    style={{textDecoration: "none", color: "#6b90cc"}} to={{pathname: "signUp"}}> New account</Link> </span>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        </div>
    )
}