import React from "react";
import style from "./ProjectsSection.module.css";
import Title from "../Title/Title";
import SliderComponent from "../SliderComponent/SliderComponent";
import { SwiperSlide } from "swiper/react";
import ProjectItem from "./components/ProjectItem/ProjectItem";

import image1 from "../../assets/img/why3.png";
import image2 from "../../assets/img/why4.avif";
import image3 from "../../assets/img/why5.webp";
import image4 from "../../assets/img/why.jpeg";

const ProjectsSection = () => {
  return (
    <div className="container">
      <div className={style.section}>
        <Title>/ Наші проекти</Title>
      </div>
      <div className={style.sliderWrapper}>
        <SliderComponent>
          <SwiperSlide>
            <ProjectItem image={image1} url={"/"}>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nullam auctor ante tortor, ut facilisis
              risus luctus a. In mauris metus, tristique at consectetur vitae,
              condimentum quis felis. Fusce aliquam, quam eget laoreet commodo,
              libero lacus vehicula nulla, et luctus risus elit quis purus.
              Morbi consectetur nunc eget nulla fringilla dapibus vitae quis
              nisl. Nullam et nibh nisi.
            </ProjectItem>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectItem image={image2} url={"/"}>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nullam auctor ante tortor, ut facilisis
              risus luctus a. In mauris metus, tristique at consectetur vitae,
              condimentum quis felis. Fusce aliquam, quam eget laoreet commodo,
              libero lacus vehicula nulla, et luctus risus elit quis purus.
              Morbi consectetur nunc eget nulla fringilla dapibus vitae quis
              nisl. Nullam et nibh nisi.
            </ProjectItem>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectItem image={image3} url={"/"}>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nullam auctor ante tortor, ut facilisis
              risus luctus a. In mauris metus, tristique at consectetur vitae,
              condimentum quis felis. Fusce aliquam, quam eget laoreet commodo,
              libero lacus vehicula nulla, et luctus risus elit quis purus.
              Morbi consectetur nunc eget nulla fringilla dapibus vitae quis
              nisl. Nullam et nibh nisi.
            </ProjectItem>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectItem image={image4} url={"/"}>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Nullam auctor ante tortor, ut facilisis
              risus luctus a. In mauris metus, tristique at consectetur vitae,
              condimentum quis felis. Fusce aliquam, quam eget laoreet commodo,
              libero lacus vehicula nulla, et luctus risus elit quis purus.
              Morbi consectetur nunc eget nulla fringilla dapibus vitae quis
              nisl. Nullam et nibh nisi.
            </ProjectItem>
          </SwiperSlide>
        </SliderComponent>
      </div>
    </div>
  );
};

export default ProjectsSection;
