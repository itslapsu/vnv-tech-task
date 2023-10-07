import React from "react";
import style from "./WhyUsSection.module.css";
import Title from "../Title/Title";

import Button from "../Button/Button";
import Subtitle from "../Subtitle/Subtitle";
import SliderComponent from "../SliderComponent/SliderComponent";

import adv1 from "../../assets/img/why.jpeg";
import adv2 from "../../assets/img/why2.jpeg";
import adv3 from "../../assets/img/why3.png";
import adv4 from "../../assets/img/why4.avif";
import adv5 from "../../assets/img/why5.webp";
import adv6 from "../../assets/img/why6.webp";
import { SwiperSlide } from "swiper/react";
import Advantage from "./components/Advantage/Advantage";

const WhyUs = () => {
  return (
    <div className="container">
      <div className={style.section}>
        <Title>/ Чому ми?</Title>
        <div className={style.content}>
          <Subtitle>Чому варто вибрати саме нас?</Subtitle>
          <SliderComponent>
            <>
              <SwiperSlide>
                <Advantage icon={adv1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at magna hendrerit, aliquet felis ut, tristique quam. Sed
                  condimentum rhoncus mi, a porttitor purus condimentum at.
                </Advantage>
              </SwiperSlide>
              <SwiperSlide>
                <Advantage icon={adv2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at magna hendrerit, aliquet felis ut, tristique quam. Sed
                  condimentum rhoncus mi, a porttitor purus condimentum at.
                </Advantage>
              </SwiperSlide>
              <SwiperSlide>
                <Advantage icon={adv3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at magna hendrerit, aliquet felis ut, tristique quam. Sed
                  condimentum rhoncus mi, a porttitor purus condimentum at.
                </Advantage>
              </SwiperSlide>
              <SwiperSlide>
                <Advantage icon={adv4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at magna hendrerit, aliquet felis ut, tristique quam. Sed
                  condimentum rhoncus mi, a porttitor purus condimentum at.
                </Advantage>
              </SwiperSlide>
              <SwiperSlide>
                <Advantage icon={adv5}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at magna hendrerit, aliquet felis ut, tristique quam. Sed
                  condimentum rhoncus mi, a porttitor purus condimentum at.
                </Advantage>
              </SwiperSlide>
              <SwiperSlide>
                <Advantage icon={adv6}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at magna hendrerit, aliquet felis ut, tristique quam. Sed
                  condimentum rhoncus mi, a porttitor purus condimentum at.
                </Advantage>
              </SwiperSlide>
            </>
          </SliderComponent>
          <div className={style.buttonWrapper}>
            <Button animate>Замовити</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
