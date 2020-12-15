import React from "react";

export default function EachTap(props) {
  const capacity = props.item.capacity / 125;
  const level = props.item.level / 130;

  return (
    <div className="each-tap">
      <div className="capacity" style={{ height: capacity + "vh" }}></div>
      <div className="level" style={{ height: level + "vh" }}></div>
      <p>{props.item.beer}</p>
    </div>
  );
}
