import React from "react";
import style from "./Footer.module.css";

import tg from "../../assets/img/tg.png";
import insta from "../../assets/img/insta.svg";
import tiktok from "../../assets/img/tiktok.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className={style.section}>
        <div className={style.content}>
          <a className={style.email} href="mailto:team@vnv.solutions">
            team@vnv.solutions
          </a>
          <a
            className={style.geo}
            href="https://www.google.com.ua/maps/place/%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%9A%D0%B0%D1%80%D0%BB%D0%B0+%D0%9C%D1%96%D0%BA%D0%BB%D1%8C%D0%BE%D1%88%D0%B0,+7,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2,+%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+79000/@49.7835065,24.0144865,16.5z/data=!4m6!3m5!1s0x473ae7d4b02a2c4d:0xb2af24fc0f878a18!8m2!3d49.7835443!4d24.0178518!16s%2Fg%2F11fm9tmkkk?hl=uk"
          >
            Karla Miklʹosha, 7
            <br />
            Lviv, Ukraine
          </a>
        </div>

        <div className={style.socials}>
          <a className={style.social} href="https://t.me/vnv_solutions">
            <img className={style.img} src={tg} alt="Telegram" />
          </a>
          <a
            className={style.social}
            href="https://instagram.com/vnv_solutions?igshid=MWI4MTIyMDE="
          >
            <img className={style.img} src={insta} alt="Instagram" />
          </a>
          <a
            className={style.social}
            href="https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1"
          >
            <img className={style.img} src={tiktok} alt="TikTok" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
