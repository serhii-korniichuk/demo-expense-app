import { observer } from "mobx-react-lite"
import { Typography } from "@mui/material"
import HomeLayout from "../UIComponents/HomePage Components/HomeLayout"
import Congrats from "../UIComponents/HomePage Components/Congrats"
import LogoutButton from "../UIComponents/HomePage Components/LogoutButton"
import FooterImage from "../UIComponents/HomePage Components/FooterImage"
import React from "react"

const HomePage: React.FC = () => {

  return (
    <HomeLayout>
      <Congrats></Congrats>
      <Typography sx={{
        width: "466px",
        color: "white",
        mt: "4%",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "155%",
        textAlign: "center",
      }}>
        Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work
      </Typography>
      <LogoutButton></LogoutButton>
      <FooterImage></FooterImage>
    </HomeLayout >
  )
}

export default observer(HomePage)