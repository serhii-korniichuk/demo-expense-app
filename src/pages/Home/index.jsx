import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Logo from "assets/Logo";
import Congrats from "assets/Congrats";
import { Button } from "@mui/material";
import HomeIcon from "assets/HomeIcon";

import authStore from "stores/authStore";

import getStyles from "./style";

const Home = () => {
  const navigate = useNavigate();
  const classes = getStyles();
  const { logout } = authStore;
  const handleLogout = () => {
    logout({ navigate });
  };
  return (
    <div style={classes.wrapper}>
      <Logo sx={classes.logo} />
      <div style={classes.content}>
        <Congrats sx={classes.congrats} />
        <Typography variant="h5" sx={classes.subTitle}>
          Now you are on the main page. Soon we will provide you with detailed
          feedback on the result of your work
        </Typography>
        <Button sx={classes.button} onClick={handleLogout}>
          Log out
        </Button>
        <HomeIcon sx={classes.icon} />
      </div>
    </div>
  );
};

export default Home;
