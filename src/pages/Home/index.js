import "./index.css";
import Decor from "../../assets/icons/Decor.svg";
import Congratulations from "../../assets/icons/Congratulations.svg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomePage = ({ logout, isLogged }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/signin");
    }
  }, [isLogged, navigate]);

  return (
    <div className="home">
      <div className="home__title__wrapper">
        <h1 className="home__title">Congratulation</h1>
        <div className="decor">
          <img src={Decor} alt="" />
        </div>
      </div>
      <div className="home__text">
        Now you are on the main page. Soon we will provide you with detailed
        feedback on the result of your work
      </div>
      <Button onClick={() => logout()}>Logout</Button>
      <div className="home__footer">
        <img src={Congratulations} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
