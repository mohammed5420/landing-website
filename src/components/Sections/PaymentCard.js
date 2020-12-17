import React, { useState, useRef } from "react";

const PaymentCard = () => {
  const [active, setActive] = useState({
    one: "triger-active",
    tow: "",
  });

  const clikeHndler = e => {
    if (e.target.id === "triger-one") {
      if (active.one === "") {
        setActive({
          one: "triger-active",
          tow: "",
        });
      }
    } else if (e.target.id === "triger-tow") {
      if (active.tow === "") {
        setActive({
          one: "",
          tow: "triger-active",
        });
      }
    }
  };
  const refOne = useRef();
  const refTow = useRef();
  const handleMove = e => {
    let X = (window.innerWidth / 2 - e.pageX) / 17;
    let Y = (window.innerHeight / 2 - e.pageY) / 20;
    refOne.current.style.transform = `rotateX(${Y / 20}deg) rotateY(${
      X / 2
    }deg)`;
    refOne.current.style.transition = `none`;
  };
  const handleMoveTow = e => {
    let X = (window.innerWidth / 2 - e.pageX) / 17;
    let Y = (window.innerHeight / 2 - e.pageY) / 20;
    refTow.current.style.transform = `rotateX(${Y / 20}deg) rotateY(${
      X / 2
    }deg)`;
    refTow.current.style.transition = `none`;
  };

  const handleLeave = ref => {
    ref.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    ref.current.style.transition = `transform .1s ease-in-out`;
  };

  return (
    <section className="payment" id="pricing">
      <div className="payment__title">
        <h2 className="title-header">
          get wesome features without extra charges
        </h2>
        <p className="title-body ">
          The rise of mobile devices transforms the way we consume information
          entirely and the world's most elevant channels such as Facebook.
        </p>
      </div>
      <div className="payment__triger">
        <p
          id="triger-one"
          className={`triger ${active.one}`}
          onClick={clikeHndler}
        >
          monthly
        </p>
        <p
          id="triger-tow"
          className={`triger ${active.tow}`}
          onClick={clikeHndler}
        >
          annually
        </p>
      </div>
      <div className="payment__container">
        <div
          className="payment__container__card"
          ref={refOne}
          onMouseMove={handleMove}
          onMouseLeave={() => {
            handleLeave(refOne);
          }}
        >
          <div className="payment__container__card-tilte">
            <p className="card-price">
              <span className="price-mount">$0</span>
              <span className="price-per">
                {active.one.length > 0 ? "/monthly" : "/annually"}
              </span>
            </p>
            <h3 className="card-type">business class</h3>
            <p className="card-discrype">for small teams or office</p>
          </div>
          <div className="payment__container__card-list">
            <ul className="card-list">
              <li className="card-list-item">drag and drop builder</li>
              <li className="card-list-item">1000's of templates</li>
              <li className="card-list-item">blog support tools</li>
              <li className="card-list-item">eCommerce store</li>
            </ul>
          </div>
          <div className="payment__container__card-cta">
            <a href="/" className="btn">
              start free trail
            </a>
          </div>
        </div>
        <div
          className="payment__container__card"
          ref={refTow}
          onMouseMove={handleMoveTow}
          onMouseLeave={() => {
            handleLeave(refTow);
          }}
        >
          <div className="payment__container__card-tilte">
            <p className="card-price">
              <span className="price-mount">
                {active.tow.length > 0 ? "$1188" : "$99"}
              </span>
              <span className="price-per">
                {active.tow.length > 0 ? "/annually" : "/monthly"}
              </span>
            </p>
            <h3 className="card-type">pro master</h3>
            <p className="card-discrype">fast best opportunities</p>
          </div>
          <div className="payment__container__card-list">
            <ul className="card-list">
              <li className="card-list-item">drag and drop builder</li>
              <li className="card-list-item">1000's of templates</li>
              <li className="card-list-item">blog support tools</li>
              <li className="card-list-item">eCommerce store</li>
            </ul>
          </div>
          <div className="payment__container__card-cta">
            <a href="/" className="btn">
              subscribe now
            </a>
            <a href="/" className="btn--text">
              or start 14days trail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentCard;
