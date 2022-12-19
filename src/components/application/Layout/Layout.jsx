import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../ui/Logo/Logo";
import styles from "./styles.module.css";

const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Logo />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
