import React from "react";
import logo from "../Assets/Icons/Cascade-Logo_Dark_green.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <img src={logo} className="cascade-header-logo" alt="Cascade-logo" />
      </header>
    </>
  );
};

export default Header;
