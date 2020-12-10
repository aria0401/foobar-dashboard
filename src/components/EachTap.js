
import React from "react";

export default function EachTap(props){
  const capacity = props.item.capacity/150;
  const level = props.item.level/150;


    return(
      <div className="each-tap">
        <div className="capacity" style={{height: capacity+ "vw"}}></div>
        <div className="level" style={{height: level + "vw"}}></div>
        <p>{props.item.beer}</p>
      </div>
    )
  }