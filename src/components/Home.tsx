import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useJwt } from 'react-jwt'
import { logOut, refreshAccessToken } from "../auth";

export const HomePage = () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");
  const { isExpired } = useJwt(accessToken!)
  const redirectCheck = localStorage.getItem("wasRedirected");

  const navigate = useNavigate();

  useEffect(() => {
    if (redirectCheck) {
      toast.success("Password is correct!");
      localStorage.removeItem("wasRedirected");
    }

    if (!accessToken) {
      navigate("/login")
    }

    if (isExpired) {
      refreshAccessToken(refreshToken)
        .then((response) => {
          const { accessToken } = response.data;
          localStorage.setItem("accessToken", accessToken);
        })
        .catch(() => navigate("/login"));
    }
  }, []);

  const doLogout = () => {
    logOut(accessToken)
      .finally(() => {
        localStorage.clear();
        navigate("/login");
      });
  }

  return (
    <div className="container-home">
      <ToastContainer position="top-center" theme="dark" />
      <div className="logo pt-5 ml-5">
        <h2>InCode</h2>
        <span>Finance</span>
      </div>
      <div className="cover-home">
        <div className="content">
          <header>
            <h1>Congratulations</h1>
            <img className="decor" src="images/img2.png" />
          </header>
          <span className="mt-5">
            Now you are on the main page. Soon we will provide you with detailed
            feedback on the result of your work
          </span>
          <button className="btn submit-btn mt-5 w-20 logout" onClick={doLogout}>
            Log Out
          </button>
          <img className="mt-5" src="images/img1.png" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
