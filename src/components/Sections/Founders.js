import React from "react";
import img1 from "../../imgs/images/1.png";
import img2 from "../../imgs/images/2.png";
import img3 from "../../imgs/images/3.png";
import img4 from "../../imgs/images/4.png";
import img5 from "../../imgs/images/5.png";
import img6 from "../../imgs/images/6.png";
import img7 from "../../imgs/images/7.png";
import img8 from "../../imgs/images/8.png";

const Founders = ({ counter }) => {
  const employees = [
    {
      id: 1,
      name: "zalton nemoth",
      jobTitle: "ceo of pixler lab",
      img: img1,
    },
    {
      id: 2,
      name: "batrick jain",
      jobTitle: "team manager",
      img: img2,
    },
    {
      id: 3,
      name: "skyler white",
      jobTitle: "compatitive programer",
      img: img3,
    },
    {
      id: 4,
      name: "trevor noah",
      jobTitle: "dev ops",
      img: img4,
    },
    {
      id: 5,
      name: "jessy pinkman",
      jobTitle: "designer",
      img: img5,
    },
    {
      id: 6,
      name: "walter white",
      jobTitle: "product designer",
      img: img6,
    },
    {
      id: 7,
      name: "mary show",
      jobTitle: "back end dev",
      img: img7,
    },
    {
      id: 8,
      name: "mo salah",
      jobTitle: "full stack dev",
      img: img8,
    },
  ];

  const filterdEmp = employees
    .filter(el => {
      return el.id === counter;
    })
    .map(el => (
      <div className="employ-card" key={el.id}>
        <img className="employ-card__img" src={el.img} alt="employee" />
        <div className="employ-card__info">
          <h3 className="info-name">{el.name}</h3>
          <p className="info-job">{el.jobTitle}</p>
        </div>
      </div>
    ));
  return <div className="founders__container">{filterdEmp}</div>;
};

export default Founders;
