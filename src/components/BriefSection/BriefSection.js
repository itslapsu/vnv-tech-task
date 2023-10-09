import React from "react";
import style from "./BriefSection.module.css";
import Title from "../Title/Title";
import Button from "../Button/Button";

import { motion } from "framer-motion";
import downAnimate from "../../assets/animate/downAnimate";

import { Element } from "react-scroll";

const BriefSection = () => {
  return (
    <Element name="BriefSection" className={style.background}>
      <div className="container">
        <div className={style.section}>
          <Title>/ Заповнення брифу</Title>
          <motion.p
            variants={downAnimate}
            transition={{ delay: 0.5 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={style.text}
          >
            Ut eros nunc, gravida a ipsum id, rhoncus placerat metus. Quisque
            semper suscipit est, et mollis leo condimentum sed. Integer sodales
            suscipit dolor. Duis rhoncus ornare lorem, in facilisis ante
            placerat ornare. Aenean ut ullamcorper dui. Donec vehicula ipsum ut
            velit rutrum, eget tincidunt ex posuere. Nulla eu lorem accumsan,
            laoreet mauris suscipit, pulvinar neque. Vivamus vehicula, lorem vel
            lobortis fermentum, tortor ipsum malesuada nibh, vel malesuada
            ligula lorem ut sem. Curabitur maximus, lacus at interdum tincidunt,
            dolor nisi blandit metus, sit amet tempus ante elit id felis. Nulla
            varius porttitor quam, sed feugiat est imperdiet in. In suscipit sem
            nisl, in pretium urna imperdiet sit amet. Nunc sodales libero sed
            aliquet porta. Integer sed faucibus libero, non lacinia eros.
          </motion.p>
          <div className={style.buttonWrapper}>
            <Button>Заповнити зараз</Button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default BriefSection;
