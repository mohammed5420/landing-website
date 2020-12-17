import React, { useRef, useState } from "react";
import Cards from "./Cards";
import icon1 from "../../imgs/icon-7.png";
import icon2 from "../../imgs/icon-8.png";
import icon3 from "../../imgs/icon-9.png";
import icon4 from "../../imgs/icon-10.png";
import icon5 from "../../imgs/icon-11.png";
import icon6 from "../../imgs/icon-12.png";
import obs from "../hooks/interSectionHook";

const Choose = () => {
  const feature = [
    {
      icon: icon1,
      title: "app development",
      body:
        "get your blood tests delivered at home collect a sample from the news your blood test",
    },
    {
      icon: icon2,
      title: "10 times award",
      body:
        "get your blood tests delivered at home collect a sample from the news your blood test",
    },
    {
      icon: icon3,
      title: "cloud storage",
      body:
        "get your blood tests delivered at home collect a sample from the news your blood test",
    },
    {
      icon: icon4,
      title: "customaization",
      body:
        "get your blood tests delivered at home collect a sample from the news your blood test",
    },
    {
      icon: icon5,
      title: "ux planning",
      body:
        "get your blood tests delivered at home collect a sample from the news your blood test",
    },
    {
      icon: icon6,
      title: "customer support",
      body:
        "get your blood tests delivered at home collect a sample from the news your blood test",
    },
  ];
  const ref = useRef();
  const [entersecting, setIsentersecting] = useState(false);
  obs(ref, entersecting, setIsentersecting);
  return (
    <section className="choose" ref={ref}>
      <div
        className={`choose__header ${
          entersecting ? "animateLeft" : "animateRight"
        }`}
      >
        <h2 className="choose__header--title">why you should choose our app</h2>
        <p className="choose__header--body">
          The rise of mobile devices transforms the way we consume information
          entirely and the world's
        </p>
      </div>
      <div className={`choose__tools ${entersecting ? "animateRight" : ""}`}>
        <Cards pos="center" body={feature} limite={6} />
      </div>
    </section>
  );
};

export default Choose;
