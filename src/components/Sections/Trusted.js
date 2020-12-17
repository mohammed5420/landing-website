import React, { useState, useRef } from "react";
import companie1 from "../../imgs/1.png";
import companie2 from "../../imgs/2.png";
import companie3 from "../../imgs/3.png";
import companie4 from "../../imgs/4.png";
import companie5 from "../../imgs/5.png";
import obs from "../hooks/interSectionHook";

const Trusted = () => {
  const ref = useRef();

  const [entersecting, setIsentersecting] = useState(false);
  obs(ref, entersecting, setIsentersecting);
  return (
    <section
      className={`trusted-by ${entersecting ? "animateBottom" : "animateTop"}`}
      ref={ref}
    >
      <h2 className="trusted-by__title">trusted by companies like</h2>
      <div className="trusted-by__companies">
        <img src={companie1} alt="companie" />
        <img src={companie2} alt="companie" />
        <img src={companie3} alt="companie" />
        <img src={companie4} alt="companie" />
        <img src={companie5} alt="companie" />
      </div>
    </section>
  );
};

export default Trusted;
