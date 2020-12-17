import React from "react";
import Cards from "./Cards";
import iconFeature from "../../imgs/features-phone.png";
import icon1 from "../../imgs/icon-3.png";
import icon2 from "../../imgs/icon-2.png";
import icon3 from "../../imgs/icon-1.png";

const Features = () => {
  const feature = [
    {
      color: "red",
      icon: icon1,
      title: "fast performance",
      body:
        "get your blood tests delivered at home collect a sample from the news your blood test",
    },
    {
      color: "blue",
      icon: icon2,
      title: "prototyping",
      body:
        "get your blood tests delivered at home collect a sample from the news your blood test",
    },
    {
      color: "green",
      icon: icon3,
      title: "victor editing",
      body:
        "get your blood tests delivered at home collect a sample from the news your blood test",
    },
  ];
  return (
    <section className="Features" id="features">
      <div className="Features__img">
        <img src={iconFeature} alt="feature-icon" />
      </div>
      <div className="Features__info">
        <div className="Features__info--title">
          <h2>awesome app features</h2>
          <p>
            increase productivity with a simple to-do app .app for managing your
            personal budget
          </p>
        </div>
        <div className="Features__info--tools">
          <Cards pos="horizon" body={feature} limite={3} />
        </div>
      </div>
    </section>
  );
};

export default Features;
