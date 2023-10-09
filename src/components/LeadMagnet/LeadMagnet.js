import React from "react";
import style from "./LeadMagnet.module.css";
import Button from "../Button/Button";

const LeadMagnet = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isTop = scrollTop < 300;
      const isBottom =
        scrollTop + window.innerHeight >= document.body.offsetHeight - 300;

      if (isTop || isBottom) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ bottom: isVisible ? "0" : "-1000px" }}
      className={style.section}
    >
      <div className="container">
        <div className={style.content}>
          <p className={style.text}>Знижка на перше замовлення!</p>
          <div className={style.buttonWrapper}>
            <Button animate scrollTo="BriefSection">
              Застосувати знижку
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnet;
