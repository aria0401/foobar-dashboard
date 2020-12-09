import React from "react";

export default function EachTap(props){
  const level = props.item.level/13;
  const capacity = props.item.capacity/13;


    return(
      <div> 

    <div className="level" style={{
      background:"#E39C96",
      height: level,
      marginTop:"5px",
      marginLeft:"5px",
      marginRight: "5px",
      borderRadius: "5px",
    }}>
      <p>
      {props.item.level}
      </p>
      </div>

      {/* <div className="capacity" style={{
      background:"#F6C83F",
      height: capacity,
      marginTop:"5px",
      marginLeft:"5px",
      marginRight: "5px",
      borderRadius: "5px",
    }}>
      <p>
      {props.item.level}
      </p>
      </div> */}
      </div>
    )
  }