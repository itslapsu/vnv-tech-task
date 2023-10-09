import React, { useState } from "react";
import style from "./ContactForm.module.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import downAnimate from "../../../../assets/animate/downAnimate";
import { motion } from "framer-motion";
import Button from "../../../Button/Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [viber, setViber] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSendButton = (e) => {
    e.preventDefault();

    if (name.length < 5)
      return toast.error("Ім'я має складатися щонайменше з 5 літер!");

    if (!contactMethod) return toast.error("Виберіть спосіб звʼязку!");

    switch (contactMethod) {
      case "email":
        if (email.length < 5) {
          return toast.error("Пошта має складатися щонайменше з 5 літер!");
        }
        break;

      case "whatsapp":
        if (whatsapp.length < 10) {
          return toast.error("Телефон введено не правильно!");
        }
        break;

      case "viber":
        if (viber.length < 10) {
          return toast.error("Телефон введено не правильно!");
        }
        break;

      case "telegram":
        if (!telegram.length) {
          return toast.error("Ви не вказали нік у Telegram!");
        }
        break;

      default:
        break;
    }

    if (additionalInfo.length < 10)
      return toast.error("Текст має складатися щонайменше з 10 літер!");

    return toast.success("Ви успішно надіслали повідомлення.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут можна обробити відправку форми або вивести дані в консоль
    console.log({
      name,
      contactMethod,
      email,
      telegram,
      whatsapp,
      viber,
      additionalInfo,
    });
  };

  return (
    <motion.div
      variants={downAnimate}
      transition={{ delay: 0.5 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={style.form}
    >
      <form onSubmit={handleSubmit}>
        <input
          className={style.input}
          placeholder="Ім'я"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select
          className={style.input}
          value={contactMethod}
          onChange={(e) => setContactMethod(e.target.value)}
          required
        >
          <option value="">Оберіть спосіб зв'язку</option>
          <option value="email">E-mail</option>
          <option value="telegram">Telegram</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="viber">Viber</option>
        </select>

        {contactMethod === "email" && (
          <input
            className={style.input}
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        )}

        {contactMethod === "telegram" && (
          <input
            className={style.input}
            placeholder="Нік у Telegram"
            type="text"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            required
          />
        )}

        {contactMethod === "whatsapp" && (
          <input
            className={style.input}
            placeholder="Номер у WhatsApp"
            type="text"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
          />
        )}

        {contactMethod === "viber" && (
          <input
            className={style.input}
            placeholder="Номер у Viber"
            type="text"
            value={viber}
            onChange={(e) => setViber(e.target.value)}
            required
          />
        )}

        <textarea
          className={style.input}
          placeholder="Додаткова інформація"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />
        <div className={style.buttonWrapper}>
          <Button onClick={(e) => handleSendButton(e)}>Надіслати</Button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </motion.div>
  );
};

export default ContactForm;
