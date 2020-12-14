import React from "react";
// import bartenderImg from "../media/bartender.svg";
// import bartenderImg from "../media/jonas.svg";
// import bartenderImg from "../media/peter.svg";
// import bartenderImg from "../media/dannie.svg";
// import bartenderImg from "../media/dannie-2.svg";
// import bartenderImg from "../media/jonas-2.svg";
import bartenderImg from "../media/peter-2.svg";

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
