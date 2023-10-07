import React from "react";
import style from "./SliderComponent.module.css";

import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderComponent = ({ children }) => {
  React.useEffect(() => {
    const buttonNext = document.querySelectorAll(".swiper-button-next");
    buttonNext.forEach((button) => {
      button.classList.add(style.buttonNext);
    });

    const buttonPrev = document.querySelectorAll(".swiper-button-prev");
    buttonPrev.forEach((button) => {
      button.classList.add(style.buttonPrev);
    });
  }, []);

  return (
    <Swiper
      pagination={{
        type: "progressbar",
        className: style.progressbar,
      }}
      navigation={true}
      spaceBetween={10}
      modules={[Pagination, Navigation]}
      className={style.slider}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default SliderComponent;
