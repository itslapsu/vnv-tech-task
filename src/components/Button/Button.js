import React from "react";
import style from "./Button.module.css";

import { scroller } from "react-scroll";

const Button = ({ children, animate, url, onClick, black, scrollTo }) => {
  const scrollToElement = (e, element) => {
    e.preventDefault();

    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className={animate ? style.animate : ""}>
      <a
        className={`${style.button} ${black ? style.black : ""}`}
        onClick={
          scrollTo ? (e) => scrollToElement(e, scrollTo) : onClick ?? onClick
        }
        href={url ? url : "/"}
      >
        {children}
      </a>
    </div>
  );
};

export default Button;
