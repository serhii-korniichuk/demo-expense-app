import { Button, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutCurrUser } from "../../queries/queries";
import { muiButtonTheme } from "../../styles/mui/themes";
import "./UserPage.scss";
import image from "../../images/vector.png";

export const UserPage: React.FC = () => {
  const accessToken = localStorage.getItem("accessToken");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    try {
      setIsLoading(true);

      await logoutCurrUser();

      localStorage.removeItem("accessToken");
      navigate("/signin");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="page">
      {accessToken && (
        <>
          <h1 className="page__title">
            Congratulations!
          </h1>
          <p className="page__paragraph">
            Now you are on the main page. Soon we will provide you
            with detailed feedback on the result of your work
          </p>
          <ThemeProvider theme={muiButtonTheme}>
            <Button
              variant="contained"
              type="submit"
              id="signUp"
              disabled={isLoading}
              onClick={() => logout()}
              sx={{ width: "fit-content" }}
            >
              Logout!
            </Button>
          </ThemeProvider>
        </>
      )}

      {!accessToken && (
        <>
          <h1 className="page__title">
            Access denied!
          </h1>
          <p className="page__paragraph">
            Please log in.
          </p>
          <ThemeProvider theme={muiButtonTheme}>
            <Button
              variant="contained"
              type="submit"
              id="signUp"
              disabled={isLoading}
              onClick={() => logout()}
              sx={{ width: "fit-content" }}
            >
              Back to home page
            </Button>
          </ThemeProvider>
        </>
      )}

      <img
        className="page__image"
        src={image}
        alt="three happy people on the background of the graph"
        width="340"
        height="288"
      />
    </section>
  );
};
