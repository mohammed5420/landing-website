import React, { useRef, useState } from "react";
import obs from "../hooks/interSectionHook";

const Card = ({ pos, icon, feature }) => {
  const ref = useRef();

  const [entersecting, setIsentersecting] = useState(false);
  obs(ref, entersecting, setIsentersecting);
  return (
    <div
      className={`card ${pos} ${entersecting ? "animateTop" : "animateBottom"}`}
      ref={ref}
    >
      <img src={icon} alt="icon" className="card__img" />
      <div className="card__info">
        <h2 className={`card__info--title card__info--title-${feature.color}`}>
          {feature.title}
        </h2>
        <p className="card__info--body">{feature.body}</p>
      </div>
    </div>
  );
};

export default Card;
