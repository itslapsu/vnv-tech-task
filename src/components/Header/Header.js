import React, { useState } from "react";
import style from "./Header.module.css";
import Burger from "./components/Burger/Burger";
import Logo from "./components/Logo/Logo";
import Nav from "./components/Nav/Nav";

import { motion } from "framer-motion";

import leftAnimate from "../../assets/animate/leftAnimate";
import rightAnimate from "../../assets/animate/rightAnimate";
import Button from "../Button/Button";

import { scroller } from "react-scroll";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);

    document.body.style.overflow = `${isActive ? "auto" : "hidden"}`;
  };

  const scrollToElement = (e, element) => {
    e.preventDefault();

    setIsActive(false);
    document.body.style.overflow = "auto";

    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <motion.header
      variants={leftAnimate}
      initial="hidden"
      animate="visible"
      className={style.header}
    >
      <motion.div transition={{ delay: 0.2 }} variants={leftAnimate}>
        <Logo />
      </motion.div>
      <div className={`${style.buttons} ${isActive ? style.active : ""}`}>
        <Nav
          handleBurgerClick={handleBurgerClick}
          scrollToElement={scrollToElement}
        />
        <motion.div transition={{ delay: 0.7 }} variants={rightAnimate}>
          <Button scrollTo="BriefSection">Замовити</Button>
        </motion.div>
      </div>
      <Burger isActive={isActive} handleBurgerClick={handleBurgerClick} />
    </motion.header>
  );
};

export default Header;
