import React from "react"
import { Box, styled } from "@mui/material"
import Logo from "../Logo/Logo"
import CustomButton from "../Button/Button"
import { useAppDispatch } from "../../store/hooks"
import { logout } from "../../store/reducers/appReducer"
import { useNavigate } from "react-router-dom"
// @ts-ignore
import img from "../../assets/footer_img.svg"

const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const redirect = useNavigate()

  const LogoutHandler = () => {
    dispatch(logout())
    localStorage.clear()
    redirect("/")
  }

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <TextWrapper>
        <HomeTitle>Congratulations</HomeTitle>
        <HomeDescription>
          Now you are on the main page. Soon we will provide you with detailed feedback on the
          result of your work
        </HomeDescription>
        <Box sx={{ width: "99px", margin: "0 auto" }}>
          <CustomButton label='Log Out' handler={LogoutHandler} />
        </Box>
      </TextWrapper>
      <ImgWrapper>
        <img src={img} alt='' />
      </ImgWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(Box)({
  padding: "48px 60px 41px",
  background: "#1D283A",
  position: "relative",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
})

const LogoWrapper = styled(Box)({
  alignSelf: "flex-start",
})

const TextWrapper = styled(Box)({
  textAlign: "center",
})

const ImgWrapper = styled(Box)({
  "& img": {
    "@media only screen and (max-width: 600px)": {
      width: "100%",
    },
  },
})

const HomeTitle = styled("h1")({
  fontWeight: 700,
  fontFamily: "Montserrat",
  fontSize: "48px",
  color: "#fff",
  textTransform: "uppercase",
  "@media only screen and (max-width: 600px)": {
    fontSize: "24px",
  },
})

const HomeDescription = styled("p")({
  margin: "48px 0",
  fontFamily: "Montserrat",
  fontWeight: 600,
  fontSize: "16px",
  color: "#fff",
  maxWidth: "466px",
  width: "100%",
  textAlign: "center",
})

export default Home
