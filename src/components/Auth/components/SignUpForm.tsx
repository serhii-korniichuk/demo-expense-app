import { Box, styled } from "@mui/material"
import { useFormik } from "formik"
import React from "react"
import * as Yup from "yup"
import CustomInput from "./CustomInput"
import CustomButton from "../../Button/Button"
import { singUpHandler } from "../../../store/reducers/appReducer"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"

const SignUpForm: React.FC<{
  handleChange: () => void
}> = ({ handleChange }) => {
  const dispatch = useAppDispatch();

  const serverError = useAppSelector((state) => state.app.serverError);

  const formik = useFormik({
    initialValues: {
      name: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required field")
        .max(60, "Field mast be max 60 chars")
        .min(2, "Field mast be min 2 chars"),
      fullName: Yup.string()
        .max(60, "Field mast be max 60 chars")
        .min(2, "Field mast be min 2 chars"),
      password: Yup.string()
        .required("Required field")
        .max(10, "Field mast be max 10 chars")
        .min(8, "Field mast be max min 8 chars"),
      confirmPassword: Yup.string()
        .required("Required field")
        .max(10, "Field mast be max 10 chars")
        .min(8, "Field mast be max min 8 chars"),
    }),
    onSubmit: async (values) => {
      if (values.password !== values.confirmPassword) {
        formik.errors.confirmPassword = "Passwords not equal"
        return
      }
      dispatch(
        singUpHandler({
          password: values.password,
          username: values.fullName,
          displayName: values.name,
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
          id='fullName'
          isPassword={false}
          errorLabel={formik.errors.fullName}
          type='text'
          label='Full Name'
          value={formik.values.fullName}
          onChange={formik.handleChange}
        />

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

        <CustomInput
          id='confirmPassword'
          isPassword={true}
          errorLabel={formik.errors.confirmPassword}
          type='password'
          label='Сonfirm Password'
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />

        {serverError && <ErrorElem> {serverError} </ErrorElem>}

        <CustomButton label='Sign In' handler={handleSubmitForm} />
        <ChangeFormText>
          I have an account. <span onClick={handleChange}>Go to Sign in</span>
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

export default SignUpForm
