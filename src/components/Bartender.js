import React from "react";
import bartenderImg from "../media/bartender.svg";

function Bartender(props) {
  return (
    <div
      className={
        props.bartender.status === "WORKING"
          ? "Bartender"
          : "inactive Bartender"
      }
    >
      <img src={bartenderImg} />
      <div className="bartender-info">
        <p>{props.bartender.name}, </p>
        <span
          style={{
            color: props.bartender.status === "WORKING" ? "#eeb61c" : "white",
          }}
        >
          {props.bartender.status}
        </span>
      </div>
    </div>
  );
}

export default Bartender;
