import React from "react";

const Button = (props) => {
  return <button onClick={props.add}>{props.children}</button>;
};

export default Button;
