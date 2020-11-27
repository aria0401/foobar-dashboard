import React from "react";
import ServingList from "./ServingList";

function Serving(props) {
  const servingArray = props.data.serving;
  
  return (
    <div className="Serving panel">
      <h1>Serving</h1>
      <ServingList serving={servingArray} />
    </div>
  );
}

export default Serving;



