import React from "react";
import style from "./HeroSection.module.css";
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import Button from "../Button/Button";
import videoWebm from "../../assets/video/hero-section-video.webm";
import videoMp4 from "../../assets/video/hero-section-video.mp4";

import { motion } from "framer-motion";
import rightAnimate from "../../assets/animate/rightAnimate";
import { ReactComponent as ScrollDown } from "../../assets/img/scroll-down.svg";

import { scroller } from "react-scroll";

const Hero = () => {
  return (
    <>
      <section className={style.section}>
        <BackgroundVideo webm={videoWebm} mp4={videoMp4} />
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
              <Button scrollTo="BriefSection" animate>
                Замовити
              </Button>
            </motion.div>
            <motion.div
              transition={{ delay: 1 }}
              variants={rightAnimate}
              className={style.scrollDownBlock}
            >
              <ScrollDown
                onClick={() => {
                  scroller.scrollTo("WhyUsSection", {
                    duration: 800,
                    delay: 0,
                    smooth: "easeInOutQuart",
                  });
                }}
                className={style.scrollDown}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
