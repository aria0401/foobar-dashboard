import React from "react";


function ServingOrder(props){
    return(
    <div className="serving">
    <p className="highlight line-number"> {props.lineNumber + 1} </p>
    <p> # {props.sevingOrder.id}</p>
  </div>
);
}

export default ServingOrder;