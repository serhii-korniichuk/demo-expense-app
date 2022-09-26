import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../api";
import Btn from "../unknown/btn";
import Header from "../unknown/header";
import styles from "./styles.module.scss";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!window.localStorage.accessToken){
      navigate(`/auth`);
    }
  }, [navigate])

  //logout request doesn't function properly

  const handleLogoutAction = () => {
    handleLogout().then(() => {
      window.localStorage.removeItem("accessToken");
      navigate(`/auth`);
    })
  }

  return (
    <div className={styles.container}>
      <Header className={styles.header} />

      <main className={styles.content}>
        <h2 className={styles.heading}>
          Congratulations{" "}
          <img className={styles.decor} src="/images/decor.png" alt="decor" />
        </h2>

        <p className={styles.subHeading}>
          Now you are on the main page. Soon we will provide <br /> you with
          detailed feedback on the result of your work
        </p>

        <Btn
          type="button"
          label="See You"
          className={styles.btn}
          onClick={handleLogoutAction}
        />

        <img className={styles.groupImg} src="/images/group.png" alt="group" />
      </main>
    </div>
  );
};

export default Home;
