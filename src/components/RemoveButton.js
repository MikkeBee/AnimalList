import React from "react";

const RemoveButton = (props) => {
  return (
    <button className="remove" onClick={props.remove}>
      X
    </button>
  );
};

export default RemoveButton;
