import React from "react";
import EachTap from "./EachTap";


function Taps(props) {
  const tapsArray = props.data.taps;

  return(
    <div className="Taps panel">
      <h1 className="header-taps">Taps</h1>

      <div className="tap-bars">
        {tapsArray && tapsArray.map((item, index) => {
           return (
          <EachTap key={index} item={item} data={props.data} />
          ) 
          })}
      </div>
    </div>
  ) 
}

export default Taps;
