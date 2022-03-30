import React from "react";
import Button from "./Button";

const Cards = () => {
  return (
    <div className="wholeCard">
      <div className="cardTop"></div>
      <div className="cardBottom">
        <p className="animalName">Animal name</p>
        <div>
          <p className="luuv">
            ♥️ <span>0</span>
          </p>
          <Button>Like it!</Button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
