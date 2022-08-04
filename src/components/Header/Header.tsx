import React from "react";
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <div className="header home__header">
        <div className="header__company">InCode</div>
        <div className="header__spec">Finance</div>
      </div>
  );
};
