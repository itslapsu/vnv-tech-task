import React from "react";
import { motion } from "framer-motion";
import style from "./Subtitle.module.css";
import rightAnimate from "../../assets/animate/rightAnimate";

const Subtitle = ({ children }) => {
  return (
    <motion.h2
      variants={rightAnimate}
      transition={{ delay: 0.3 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={style.title}
    >
      {children}
    </motion.h2>
  );
};

export default Subtitle;
