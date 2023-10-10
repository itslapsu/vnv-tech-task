import React from "react";
import style from "./FAQSection.module.css";

import { motion } from "framer-motion";
import rightAnimate from "../../assets/animate/rightAnimate";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Title from "../Title/Title";
import { Element } from "react-scroll";

const FAQSection = () => {
  return (
    <Element name="FAQSection" className={style.background}>
      <div className="container">
        <motion.div
          variants={rightAnimate}
          transition={{ delay: 0.4 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={style.section}
        >
          <Title>/ FAQ</Title>
          <Accordion className={style.accordion} allowZeroExpanded={true}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className={style.question}>
                  Питтаня 1
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={style.answer}>
                Відповідь на питання 1
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className={style.question}>
                  Питтаня 2
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={style.answer}>
                Відповідь на питання 2
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className={style.question}>
                  Питтаня 3
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={style.answer}>
                Відповідь на питання 3
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton className={style.question}>
                  Питтаня 4
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={style.answer}>
                Відповідь на питання 4
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </Element>
  );
};

export default FAQSection;
