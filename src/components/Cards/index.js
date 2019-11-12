import React from "react";
import "./style.css";
function Cards(props) {
  return (
    <div
      role="img"
      aria-label="click item"
      onClick={() => props.handleClick(props.id)}
      style={{ backgroundImage: `url("${props.image}")` }}
      className={`click-item`}
    />
  );
}
export default Cards;