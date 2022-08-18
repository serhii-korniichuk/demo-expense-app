import { Container, Link, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "../../..";

const LoginFooter: React.FC = () => {
  const { store } = useContext(Context);

  const handleChange = (): void => {
    store.setIsNeedRegister(true);
    store.errorResponse = null;
  };

  return (
    <Container>
      <Typography
        sx={{
          color: "#F1F2F1",
          mt: "14px",
          fontWeight: 400,
          fontSize: "12px",
          textAlign: "center",
        }}
      >Don’t have account yet?
        <Link
          sx={{ color: "#7FAAF0", cursor: "pointer", ml: "5px" }}
          onClick={handleChange}
          underline="none"
        > New Account
        </Link>
      </Typography>
    </Container>
  );
};

export default LoginFooter;