import React from "react";
import style from "./TestComponent.module.css";

const TestComponent = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p className={style.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fringilla
        mi ac tellus finibus, id condimentum dui pretium. Nullam nec purus vitae
        massa bibendum pretium. Mauris pharetra quam a ante pulvinar ornare.
        Curabitur laoreet est in consectetur lobortis. Sed vel tristique libero,
        non accumsan nibh. Aliquam erat volutpat. Class aptent taciti sociosqu
        ad litora torquent per conubia nostra, per inceptos himenaeos. Duis et
        risus non quam mattis bibendum quis et nisl. Maecenas at ligula sed diam
        pulvinar rutrum.
      </p>
    </div>
  );
};

export default TestComponent;
