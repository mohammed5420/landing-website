import React, { useState } from "react";
import Cards from "./Cards";
import icon1 from "../../imgs/icon-7.png";
import icon2 from "../../imgs/icon-8.png";
import icon3 from "../../imgs/icon-9.png";
import icon4 from "../../imgs/icon-10.png";
import icon5 from "../../imgs/icon-11.png";
import icon6 from "../../imgs/icon-12.png";
import phone from "../../imgs/icon-phone.png";

const UltimateFeatures = () => {
  let [limite, setLimite] = useState(4);

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
      icon: icon4,
      title: "customaization",
      body:
        "get your blood tests delivered at home collect a sample from the news your blood test",
    },
    {
      icon: icon6,
      title: "customer support",
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
      icon: icon5,
      title: "ux planning",
      body:
        "get your blood tests delivered at home collect a sample from the news your blood test",
    },
  ];
  return (
    <section className=" ultimate split">
      <div className="ultimate__info">
        <div className="ultimate__info--title">
          <h2>ultimate features that we built</h2>
          <p>
            increase productivity with a simple to-do app .app for managing your
            personal budget
          </p>
        </div>
        <div className="ultimate__info--tools">
          <Cards pos="" body={feature} limite={limite} />
        </div>
        <div className="ultimate__info--cta">
          <button
            onClick={() => (limite === 6 ? setLimite(4) : setLimite(6))}
            className="btn"
          >
            {limite === 6 ? "see less" : "see all"}
          </button>
        </div>
      </div>{" "}
      <div className="ultimate__img split__img">
        <img src={phone} alt="feature-icon" />
      </div>
    </section>
  );
};

export default UltimateFeatures;
