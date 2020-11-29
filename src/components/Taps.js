import React from "react";

function Taps(props) {
  const tapsArray = props.data.taps;
 
  return (
    <div className="Taps panel ">
      <h1>Taps</h1>
      <div className="taps-beer">
    {tapsArray.map((name, tapskey)=>{
     return <p  key={tapskey}>{name.beer}</p>
    })}</div>
    </div>
  );
}

export default Taps;
