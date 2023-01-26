import { Box, styled } from "@mui/material"
import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import CustomInput from "./CustomInput"
import CustomButton from "../../Button/Button"
import { singInHandler } from "../../../store/reducers/appReducer"
import {useAppDispatch, useAppSelector} from "../../../store/hooks"

const SignInForm: React.FC<{
  handleChange: () => void
}> = ({ handleChange }) => {
  const dispatch = useAppDispatch();
  const loginError = useAppSelector((state) => state.app.loginError);
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required field")
        .max(60, "Field mast be max 60 chars")
        .min(2, "Field mast be min 2 chars"),
      password: Yup.string()
        .required("Required field")
        .max(20, "Field mast be max 10 chars")
        .min(6, "Field mast be max min 6 chars"),
    }),
    onSubmit: async (values) => {
      dispatch(
        singInHandler({
          username: values.name,
          password: values.password,
        }),
      )
    },
  })

  const handleSubmitForm = () => {
    formik.submitForm
  }

  return (
    <Box>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px 0",
        }}
      >
        <CustomInput
          id='name'
          isPassword={false}
          errorLabel={formik.errors.name}
          type='text'
          label='User Name'
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        <CustomInput
          id='password'
          isPassword={true}
          errorLabel={formik.errors.password}
          type='password'
          label='Password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />

        {loginError && <ErrorElem> {loginError} </ErrorElem>}

        <CustomButton label='Sign In' handler={handleSubmitForm} />
        <ChangeFormText>
          Don’t have account yet? <span onClick={handleChange}>New Account</span>
        </ChangeFormText>
      </form>
    </Box>
  )
}

const ChangeFormText = styled("p")({
  fontSize: "12px",
  fontFamily: "Montserrat",
  color: "#F1F2F1",
  cursor: "pointer",
  "& span": {
    color: "#7FAAF0",
  },
})

const ErrorElem = styled("p")({
  color: "red",
  fontSize: "12px",
  fontFamily: "Montserrat",
})

export default SignInForm
