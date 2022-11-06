import React from "react";
import "./Home.scss";
import congradulationImg from "images/homeCongradulations.png";
import decor from "images/Decor.png";
import { Link, useLocation } from "react-router-dom";
import { API_AUTH, BASE_URL } from "API/incode_auth_API";
import { Header } from "components/Header";

export const Home = () => {
  const location = useLocation();
  if (!location.state) {
    return (
      <div className="homePage">
        {" "}
        <Header></Header>
        <div className="content">
          <h1 className="h1">No access </h1>
          <Link className="authPageLink" to="../Auth">
            <h2>return to intro page</h2>
          </Link>
        </div>
      </div>
    );
  }
  const { token } = location.state;
  const requestURL = `${BASE_URL}${API_AUTH.logout}`;

  const onLogout = (values: any) => {
    // console.log(values);
    if (typeof values === "undefined") {
      console.log("le");
      return;
    }
    const logoutUser = async () => {
      try {
        const response = await fetch(requestURL, {
          method: "GET",
          headers: {
            Accept: "/",
            Authorization: `Bearer ${token.accessToken}`,
          },
        });
        console.log(response);
        if (!response.ok) {
          console.log(response.status + " " + response.statusText);
          throw "Something wrong";
        }

        const data = await response.json();
      } catch (err) {}
    };
    logoutUser();
  };

  return (
    <div className="homePage">
      <Header></Header>
      <div className="content">
        <h1 className="h1">Congradulations</h1>
        <img src={decor} className="img__gratsDecor"></img>
        <p className="p">
          Now you are on the main page. Soon we will provide you with detailed
          feedback on the result of your work
        </p>
        <Link to="../Auth">
          <button className="btn__logout" onClick={onLogout}>
            Log Out
          </button>
        </Link>
        <img className="img" src={congradulationImg}></img>
      </div>
    </div>
  );
};
