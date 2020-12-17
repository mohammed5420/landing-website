import React from "react";
import Card from "./Card";

const Cards = ({ pos, body, limite }) => {
  const filterd = body.slice(0, limite);
  return (
    <div className={`cards-container ${pos}`}>
      {filterd.map(element => {
        return (
          <Card
            pos={pos}
            icon={element.icon}
            feature={element}
            key={Math.random()}
          />
        );
      })}
    </div>
  );
};
export default Cards;
