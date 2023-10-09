import React from "react";
import style from "./Tabs.module.css";

import { motion } from "framer-motion";
import downAnimate from "../../../../assets/animate/downAnimate";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../../../Button/Button";
import TestComponent from "../TestComponent/TestComponent";

const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabs = [
    {
      id: 0,
      title: "Landing Page",
      component: <TestComponent title={"Landing Page"} />,
    },
    {
      id: 1,
      title: "Багатосторінковий сайт",
      component: <TestComponent title={"Багатосторінковий сайт"} />,
    },
    {
      id: 2,
      title: "Інтернет магазин",
      component: <TestComponent title={"Інтернет-магазин"} />,
    },
    {
      id: 3,
      title: "Аудит сайту",
      component: <TestComponent title={"Аудит сайту"} />,
    },
    {
      id: 4,
      title: "Індивідуальна консультація",
      component: <TestComponent title={"Індивідуальна консультація"} />,
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        variants={downAnimate}
        className={style.tabs}
      >
        <div className={style.circles}>
          <div className={`${style.circle} ${style.red}`}></div>
          <div className={`${style.circle} ${style.gray}`}></div>
          <div className={`${style.circle} ${style.green}`}></div>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          scrollbars={true}
          mousewheel={true}
          modules={[FreeMode, Mousewheel, Scrollbar]}
          className={style.slider}
        >
          {tabs.map((tab, index) => {
            return (
              <SwiperSlide key={tab.id} className={style.slide}>
                <a
                  className={`${style.tab} ${
                    index === activeTab ? style.active : ""
                  }`}
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(index);
                  }}
                >
                  {tab.title}
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        variants={downAnimate}
        className={style.content}
      >
        {tabs[activeTab].component}
        <div className={style.buttonWrapper}>
          <Button scrollTo="BriefSection">Хочу</Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Tabs;
