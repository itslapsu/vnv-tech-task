import React from "react";
import style from "./Burger.module.css";

const Burger = ({ isActive, handleBurgerClick }) => {
  return (
    <div
      className={`${style.burger} ${isActive ? style.active : ""}`}
      onClick={handleBurgerClick}
    >
      <span />
    </div>
  );
};

export default Burger;
