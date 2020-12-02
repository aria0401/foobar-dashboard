import React from "react";
import beerimg from "../media/beer.png";

function Order(props) {
  return (
    <div className="Order">
      <p className="highlight line-number">{props.lineNumber + 1}</p>
      <img className="beerimg" src={beerimg} alt="beerImage" />

      <p> # {props.order.id}</p>
      <p className="order-details"> {props.order.order[0]} ...</p>
    </div>
  );
}

export default Order;
