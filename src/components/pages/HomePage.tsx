import { observer } from "mobx-react-lite";
import { Typography } from "@mui/material";
import HomeLayout from "../UIComponents/HomePageComponents/HomeLayout";
import Congrats from "../UIComponents/HomePageComponents/Congrats";
import LogoutButton from "../UIComponents/HomePageComponents/LogoutButton";
import FooterImage from "../UIComponents/HomePageComponents/FooterImage";
import React from "react";

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
  );
};

export default observer(HomePage);