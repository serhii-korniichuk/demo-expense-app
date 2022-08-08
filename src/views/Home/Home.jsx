import { useNavigate } from "react-router-dom";
import decor from "../../assets/decor.svg";
import imgMain from "../../assets/imgMain.png";

import "./home.scss";

function Home() {
  let navigate = useNavigate();
  const signOut = () => {
    navigate("/auth");
  };
  return (
    <div className="wrapper">
      <div className="main-wrapper">
        <img src={decor} alt="decor" className="decor" />
        <h1 className="title">Congratulations</h1>
        <p className="text">
          Now you are on the main page. Soon we will provide you with detailed
          feedback on the result of your work
        </p>
        <button className="btn-logout" onClick={signOut}>
          See You
        </button>
        <img src={imgMain} alt="people" className="imgMain" />
      </div>
    </div>
  );
}

export default Home;
