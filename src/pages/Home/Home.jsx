import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import styles from "./styles.module.css";
import vector from "./icons/vector.svg";
import routePaths from "../../routes/routePaths";
import { AuthContext } from "../../App";
import AuthService from "../../services/AuthService";

const Home = () => {
  const navigate = useNavigate();
  const { isAuth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuth) {
      navigate(routePaths.signIn);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  const handleClick = async () => {
    try {
      await AuthService.logout();
      setAuth(false);
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>Congratulations</div>
      </div>
      <div className={styles.text}>
        Now you are on the main page. Soon we will provide you with detailed feedback on the result
        of your work
      </div>
      <div className={styles.buttonWrapper}>
        <Button label="Log Out" onClick={handleClick} />
      </div>
      <div className={styles.imageWrapper}>
        <img src={vector} alt="Vector" />
      </div>
    </div>
  );
};

export default Home;
