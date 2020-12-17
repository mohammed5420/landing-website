import React, { useState, useRef } from "react";
import Cards from "./Cards";
import icon1 from "../../imgs/icon-4.png";
import icon2 from "../../imgs/icon-5.png";
import icon3 from "../../imgs/icon-6.png";
import obs from "../hooks/interSectionHook";

const SmartJack = () => {
  const smart = [
    {
      color: "red",
      title: "automatic payouts",
      icon: icon1,
      body:
        "get your blood tests delivered at home collect a sample from the news your blood test",
    },
    {
      color: "blue",
      title: "network effect",
      icon: icon2,
      body:
        "get your blood tests delivered at home collect a sample from the news your blood test",
    },
    {
      color: "green",
      title: "bigger rewards method",
      icon: icon3,
      body:
        "get your blood tests delivered at home collect a sample from the news your blood test",
    },
  ];
  const refOne = useRef();

  const [entersectingOne, setIsentersectingOne] = useState(false);
  obs(refOne, entersectingOne, setIsentersectingOne);

  const refTow = useRef();

  const [entersectingTow, setIsentersectingTow] = useState(false);
  obs(refTow, entersectingTow, setIsentersectingTow);
  return (
    <section className="smart" id="testiminial">
      <div className="smart__heading">
        <h2
          className={`smart__heading--hero ${
            entersectingOne ? "animateRight" : "animateLeft"
          }`}
          ref={refOne}
        >
          smart jackpots that you may love this anytime & and anywhere
        </h2>
        <p
          className={`smart__heading--sub ${
            entersectingTow ? "animateLeft" : "animateRight"
          }`}
          ref={refTow}
        >
          get your blood tests delivered at get your blood tests delivered at
          home collect a sample from the news your home collect a sample blood
          test home collect a sample from the news your home collect a sample
          blood test
        </p>
      </div>
      <div className="smart__details">
        <Cards pos="vertical" body={smart} />
      </div>
    </section>
  );
};

export default SmartJack;
