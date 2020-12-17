import React, { useState, useRef } from "react";
import world from "../../imgs/world.png";
import star from "../../imgs/icon-star.svg";
import next from "../../imgs/next.svg";
import disnext from "../../imgs/disnext.svg";
import disprev from "../../imgs/disprev.svg";
import Founders from "./Founders";
import obs from "../hooks/interSectionHook";

const Clients = () => {
  const [counter, setCounter] = useState(1);

  const Controls = () => {
    return (
      <div className="founders__controls">
        <div
          className={`controls-left ${counter > 1 ? "" : "disable"}`}
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          <img src={counter > 1 ? next : disprev} alt="arrow" />
        </div>
        <div
          className={`controls-right ${counter === 8 ? "disable" : ""}`}
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          <img src={counter < 8 ? next : disnext} alt="arrow" />
        </div>
      </div>
    );
  };
  const ref = useRef();
  const [entersecting, setIsentersecting] = useState(false);
  obs(ref, entersecting, setIsentersecting);
  return (
    <section className="Clients" ref={ref}>
      <div className={`Clients__img ${entersecting ? "animateBottom" : "animateTop"}`}>
        <img src={world} alt="clints/img" />
      </div>
      <div className={`Clients__main ${entersecting ? "animateTop" : "animateBottom"}`}>
        <div className="Clients__main-title">
          <h2 className="title-header">
            meet client satisfaction by using product
          </h2>
          <p className="title-body">
            The rise of mobile devices transforms the way we consume information
            entirely and the world's most elevant channels such as Facebook.
          </p>
        </div>
        <div className="Clients__main-rate">
          <div className="rate">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <div className="info">
            <h3 className="info-title">user friendly & Customizable</h3>
            <p className="info-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              in eveniet voluptatibus. Temporibus earum dicta sapiente minima,
              dolore quos atque molestiae quam molestias recusandae et numquam
              nobis labore modi assumenda.
            </p>
          </div>
          <div className="founders">
            <Founders counter={counter} />
            <Controls />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
