import React from "react";
import "./Header.scss";

export const Header: React.FC = () => {
  return(
    <header className="header App__header">
      <h1 className="header__title">InCode</h1>
      <p className="header__subtitile">Finance</p>
    </header>
  );
};
