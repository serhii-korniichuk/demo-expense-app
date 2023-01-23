import React, { useEffect, useState } from "react"
import { Box, styled } from "@mui/material"
import SignUpForm from "./components/SignUpForm"
import SignInForm from "./components/SingInForm"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { setIsRegisterSuccess } from "../../store/reducers/appReducer"
import { useNavigate } from "react-router-dom"
import Logo from "../Logo/Logo"

const Auth: React.FC = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const isRegisterSuccess = useAppSelector((state) => state.app.isRegisterSuccess)
  const isLogin = useAppSelector((state) => state.app.isLogin)
  const dispatch = useAppDispatch()
  const redirect = useNavigate()

  const handleChangeForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  useEffect(() => {
    if (isRegisterSuccess) {
      setIsSignInForm(false)
      dispatch(setIsRegisterSuccess(false))
    }
  }, [isRegisterSuccess])

  useEffect(() => {
    console.log(isLogin)
    if (isLogin) {
      redirect("/home")
    }
  }, [isLogin])

  return (
    <Wrapper>
      <Logo />
      <FormTitle>{isSignInForm ? "Sign Up".toUpperCase() : "Sign In".toUpperCase()}</FormTitle>

      {isSignInForm ? (
        <SignUpForm handleChange={handleChangeForm} />
      ) : (
        <SignInForm handleChange={handleChangeForm} />
      )}
    </Wrapper>
  )
}

const Wrapper = styled(Box)({
  margin: "0 auto",
  padding: "48px",
  maxWidth: "424px",
  background: "#1D283A",
  height: "100vh",
})

const FormTitle = styled("h1")({
  marginTop: "72px",
  marginBottom: "48px",
  fontWeight: 700,
  fontSize: "56px",
  color: "#fff",
})

export default Auth
