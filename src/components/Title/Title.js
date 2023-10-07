import React from "react";
import style from "./Title.module.css";

import { motion } from "framer-motion";
import leftAnimate from "../../assets/animate/leftAnimate";

const Title = ({ children }) => {
  return (
    <motion.div
      variants={leftAnimate}
      transition={{ delay: 0.3 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={style.title}
    >
      {children}
    </motion.div>
  );
};

export default Title;
