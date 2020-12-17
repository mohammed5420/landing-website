import React, { useState, useRef } from "react";
import add from "../../imgs/add.svg";
import obs from "../hooks/interSectionHook";
const Question = ({ data }) => {
  const [toggle, setToggle] = useState(true);
  const clickeHandeler = () => {
    setToggle(!toggle);
  };
  const ref = useRef();
  const [entersecting, setIsentersecting] = useState(false);
  obs(ref, entersecting, setIsentersecting);

  return (
    <div
      className={`question-container ${entersecting ? "animateLeft" : "animateRight"}`}
      key={data.id}
      ref={ref}
    >
      <h4 className="question">{data.q}</h4>
      {toggle ? <p className="answer">{data.a}</p> : ""}
      <span onClick={clickeHandeler} className="toggle">
        <img src={add} alt="x" />
      </span>
    </div>
  );
};

export default Question;
