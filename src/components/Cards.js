import React from "react";
import Button from "./Button";
import RemoveButton from "./RemoveButton";

const Cards = (props) => {
  return (
    <div className="wholeCard">
      <RemoveButton remove={props.remove} />
      <div className="cardTop">
        <img
          src={`https://source.unsplash.com/1600x900/?${props.name}`}
          alt={props.name}
        />
      </div>
      <div className="cardBottom">
        <p className="animalName">{props.name}</p>
        <div>
          <p className="luuv">
            ♥️ <span>{props.likes}</span>
          </p>
          <Button add={props.add}>Like it!</Button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

// When adding "3rd" level components (like remove and add button), you must pass the items at this point
