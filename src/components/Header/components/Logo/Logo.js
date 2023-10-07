import React from "react";
import style from "./Logo.module.css";

import logo from "../../../../assets/img/logo.png";

const Logo = () => {
  return (
    <a href="/">
      <img className={style.logo} src={logo} alt="" />
    </a>
  );
};

export default Logo;
