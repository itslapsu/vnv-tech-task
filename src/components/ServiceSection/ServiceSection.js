import React from "react";
import style from "./ServiceSection.module.css";
import Title from "../Title/Title";
import Subtitle from "../Subtitle/Subtitle";
import BackgroundVideo from "../HeroSection/components/BackgroundVideo/BackgroundVideo";

import videoWebm from "../../assets/video/service-section-video.webm";
import videoMp4 from "../../assets/video/service-section-video.mp4";

import Tabs from "./components/Tabs/Tabs";

import { Element } from "react-scroll";

const ServiceSection = () => {
  return (
    <Element
      name="ServicesSection"
      className="container"
      style={{ position: "relative" }}
    >
      <BackgroundVideo webm={videoWebm} mp4={videoMp4} />
      <div className={style.section}>
        <Title>/ Послуги</Title>
        <div className={style.content}>
          <Subtitle>Послуги, які ми надаємо</Subtitle>
          <div className={style.services}>
            <div className={style.item}></div>
          </div>
        </div>
        <Tabs />
      </div>
    </Element>
  );
};

export default ServiceSection;
