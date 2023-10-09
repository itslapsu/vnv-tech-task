import React from "react";
import style from "./ProjectItem.module.css";

import Button from "../../../Button/Button";

import { motion } from "framer-motion";
import downAnimate from "../../../../assets/animate/downAnimate";

const ProjectItem = ({ image, url, children }) => {
  return (
    <motion.div
      variants={downAnimate}
      transition={{ delay: 0.1 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className={style.item}
    >
      <img className={style.img} src={image} alt="" />
      <p className={style.text}>{children}</p>
      <div className={style.buttonWrapper}>
        <Button url={url}>Переглянути</Button>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
