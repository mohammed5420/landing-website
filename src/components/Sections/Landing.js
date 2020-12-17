import React, { useState, useRef } from "react";
import Stars from "../../imgs/stars.svg";
import Mobile from "../../imgs/mobile.svg";
import City from "../../imgs/city.png";
import Correct from "../../imgs/correct.svg";
import obs from "../hooks/interSectionHook";
const Landing = () => {
  const refOne = useRef();

  const [entersectingOne, setIsentersectingOne] = useState(false);
  obs(refOne, entersectingOne, setIsentersectingOne);

  const refTow = useRef();

  const [entersectingTow, setIsentersectingTow] = useState(false);
  obs(refTow, entersectingTow, setIsentersectingTow);
  return (
    <section className="landing-section">
      <div className="landing">
        <div
          className={`landing__cta ${
            entersectingOne ? "animateRight" : "animateLeft"
          }`}
          ref={refOne}
        >
          <p className="sup-header">
            <img className="correct" src={Correct} alt="correct" />
            <span> #1 editiors choise app for 2020</span>
          </p>
          <h1 className="hero-heading">best app for your modern lifestyle</h1>
          <p className="sub-header">
            increase productivity with a simple to-do app .app for managing your
            personal budgets.
          </p>
          <div className="cta-btn">
            <a className="main-btn btn" href="/">
              try for free
            </a>
            <a className="btn--text" href="/">
              watch demo video
            </a>
          </div>
        </div>
        <div
          className={`landing__img ${
            entersectingTow ? "animateLeft" : "animateRight"
          }`}
          ref={refTow}
        >
          <img alt="hero-img" src={Mobile} />
        </div>
      </div>
      <img alt="img" src={Stars} className="back-img" />
      <img alt="img" src={City} className="city-img" />
    </section>
  );
};

export default Landing;
