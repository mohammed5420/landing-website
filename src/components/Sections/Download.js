import React, { useState, useRef } from "react";
import Apple from "../../imgs/icon-apple.png";
import Google from "../../imgs/icon-google.png";
import City from "../../imgs/icon-city.png";
import obs from "../hooks/interSectionHook";

const Download = () => {
  const ref = useRef();
  const [entersecting, setIsentersecting] = useState(false);
  obs(ref, entersecting, setIsentersecting);
  return (
    <section className="download" ref={ref}>
      <div
        className={`download__info ${
          entersecting ? "animateRight" : "animateLeft"
        }`}
      >
        <div className="info">
          <h2 className="info-header">download our app now !</h2>
          <p className="info-body">
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </p>
        </div>
        <div className="links">
          <img src={Google} alt="download" />
          <img src={Apple} alt="download" />
        </div>
      </div>
      <div
        className={`download__img ${
          entersecting ? "animateLeft" : "animateRight"
        }`}
      >
        <img src={City} alt="let's started" />
      </div>
    </section>
  );
};

export default Download;
