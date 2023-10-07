import React from "react";
import style from "./HeroSection.module.css";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import Button from "../Button/Button";
import Video from "../../assets/video/hero-section-video.webm";

import { motion } from "framer-motion";
import rightAnimate from "../../assets/animate/rightAnimate";
import { ReactComponent as ScrollDown } from "../../assets/img/scroll-down.svg";

const Hero = () => {
  return (
    <>
      <section className={style.section}>
        <BackgroundVideo video={Video} />
        <div className="container">
          <motion.div
            variants={rightAnimate}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className={style.content}
          >
            <motion.h1
              transition={{ delay: 0.4 }}
              variants={rightAnimate}
              className={style.title}
            >
              Ласкаво просимо до VNV Solutions
            </motion.h1>
            <motion.p
              transition={{ delay: 0.6 }}
              variants={rightAnimate}
              className={style.subtitle}
            >
              Ми пропонуємо багато послуг, які виконують наші професіонали.
            </motion.p>
            <motion.div transition={{ delay: 0.8 }} variants={rightAnimate}>
              <Button animate>Замовити</Button>
            </motion.div>
            <motion.div
              transition={{ delay: 1 }}
              variants={rightAnimate}
              className={style.scrollDownBlock}
            >
              <ScrollDown className={style.scrollDown} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
