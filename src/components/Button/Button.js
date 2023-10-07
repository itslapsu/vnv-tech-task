import React from "react";
import style from "./Button.module.css";

const Button = ({ children, animate, url }) => {
  return (
    <div className={animate ? style.animate : ""}>
      <a className={style.button} href={url ? url : "/"}>
        {children}
      </a>
    </div>
  );
};

export default Button;
