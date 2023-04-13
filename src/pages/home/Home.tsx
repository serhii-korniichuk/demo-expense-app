import logo from "../../images/Logo.svg";
import decor from "../../images/Decor.svg";
import img1 from "../../images/Vector.png";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import { logoutUser, refreshTokenFn } from "../../Redux/authThunk";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const refreshToken = useAppSelector((state) => state.auth.refreshToken);
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(refreshTokenFn({ refreshToken }));
      await dispatch(logoutUser(accessToken)).then(() => navigate("/"));
    } catch (error: any) {
      toastr.error(error, "You need to re-login");
    }
  };

  return (
    <div className="homePage">
      <img src={logo} className="logo" alt="logo" />
      <div className="homeMain">
        <img src={decor} className="homeMain__decor" alt="decor" />
        <h1 className="homeMain__h1">CONGRATULATIONS</h1>
        <h3 className="homeMain__h3">
          Now you are on the main page. Soon we will provide <br />
          you with detailed feedback on the result of your work
        </h3>
        <button className="homeMain__btn" onClick={handleLogout}>
          Log Out
        </button>
        <img src={img1} className="homeMain__img1" alt="img1" />
      </div>
    </div>
  );
};
