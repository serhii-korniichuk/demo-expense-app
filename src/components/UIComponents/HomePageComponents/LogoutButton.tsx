import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../..";
import { useNavigate } from "react-router-dom";


const LogoutButton: React.FC = () => {
  const { store } = useContext(Context);
  let navigate = useNavigate();
  const logout = (): void => {
    store.logout();
    navigate("/auth");
  };

  return (
    <Button
      variant="contained"
      color="inherit"
      onClick={logout}
      sx={{
        borderRadius: "0px",
        mt: "3%",
        width: "98px",
        height: "44px",
        background: "#B2D0AD",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "155%",
        textTransform: "capitalize",
      }}
    >see you</Button>
  );
};

export default LogoutButton;