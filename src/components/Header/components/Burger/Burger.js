import React, { useState } from "react";
import style from "./Burger.module.css";

const Burger = ({ setMenuIsActive }) => {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
    setMenuIsActive(!isActive);
  };

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
