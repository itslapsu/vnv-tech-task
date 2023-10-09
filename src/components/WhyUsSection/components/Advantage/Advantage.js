import React from "react";
import style from "./Advantage.module.css";
import { motion } from "framer-motion";
import downAnimate from "../../../../assets/animate/downAnimate";

const Advantage = ({ children, icon, right }) => {
  return (
    <motion.div
      variants={downAnimate}
      transition={{ delay: 0.1 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className={style.item}
    >
      <img class={style.icon} src={icon} alt="" />
      <p className={style.text}>{children}</p>
    </motion.div>
  );
};

export default Advantage;
