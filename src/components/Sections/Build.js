import React, { useState, useRef } from "react";
import icon from "../../imgs/icon-build.png";
import obs from "../hooks/interSectionHook";
//${entersecting ? "animateRight" : ""}
const Build = () => {
  const refOne = useRef();

  const [entersectingOne, setIsentersectingOne] = useState(false);
  obs(refOne, entersectingOne, setIsentersectingOne);
  const refTow = useRef();

  const [entersectingTow, setIsentersectingTow] = useState(false);
  obs(refTow, entersectingTow, setIsentersectingTow);

  return (
    <section className="build split">
      <div
        className={`build__img split__img ${
          entersectingOne ? "animateRight" : "animateLeft"
        }`}
        ref={refOne}
      >
        <img src={icon} alt="build your apps" />
      </div>
      <div
        className={`build__info ${
          entersectingTow ? "animateLeft" : "animatRight"
        }`}
        ref={refTow}
      >
        <h2 className="build__info--title">
          designed & build by the lastest code integration
        </h2>
        <p className="build__info--body">
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>
        <a href="/" className="btn build__info--btn">
          learn more
        </a>
      </div>
    </section>
  );
};

export default Build;
