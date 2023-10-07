import React from "react";
import style from "./Nav.module.css";

import { motion } from "framer-motion";

import rightAnimate from "../../../../assets/animate/rightAnimate";

const Nav = () => {
  return (
    <nav>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div transition={{ delay: 0.3 }} variants={rightAnimate}>
          <li className={style.item}>
            <a className={style.link} href="/">
              Чому ми?
            </a>
          </li>
        </motion.div>
        <motion.div transition={{ delay: 0.4 }} variants={rightAnimate}>
          <li className={style.item}>
            <a className={style.link} href="/">
              Послуги
            </a>
          </li>
        </motion.div>
        <motion.div transition={{ delay: 0.5 }} variants={rightAnimate}>
          <li className={style.item}>
            <a className={style.link} href="/">
              Проекти
            </a>
          </li>
        </motion.div>
        <motion.div transition={{ delay: 0.6 }} variants={rightAnimate}>
          <li className={style.item}>
            <a className={style.link} href="/">
              FAQ
            </a>
          </li>
        </motion.div>
      </motion.ul>
    </nav>
  );
};

export default Nav;
