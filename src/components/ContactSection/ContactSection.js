import React from "react";
import style from "./ContactSection.module.css";
import Title from "../Title/Title";
import ContactForm from "./components/ContactForm/ContactForm";

import { motion } from "framer-motion";
import downAnimate from "../../assets/animate/downAnimate";

const ContactSection = () => {
  return (
    <>
      <div className={style.background}>
        <div className="container">
          <div className={style.section}>
            <Title>/ Зв'яжіться з нами</Title>
            <motion.div
              variants={downAnimate}
              transition={{ delay: 0.1 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={style.formWrapper}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
