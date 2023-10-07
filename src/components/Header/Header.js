import React, { useState } from "react";
import style from "./Header.module.css";
import Burger from "./components/Burger/Burger";
import Logo from "./components/Logo/Logo";
import Nav from "./components/Nav/Nav";

import { motion } from "framer-motion";

import leftAnimate from "../../assets/animate/leftAnimate";
import rightAnimate from "../../assets/animate/rightAnimate";
import Button from "../Button/Button";

const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

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
      <div className={`${style.buttons} ${menuIsActive ? style.active : ""}`}>
        <Nav />
        <motion.div transition={{ delay: 0.7 }} variants={rightAnimate}>
          <Button>Замовити</Button>
        </motion.div>
      </div>
      <Burger setMenuIsActive={setMenuIsActive} />
    </motion.header>
  );
};

export default Header;
