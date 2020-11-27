import React from "react";
import beerimg from "../media/beer.png";


function Order(props) {
  return (
    <div className="Order">
      <p className="highlight line-number">{props.lineNumber + 1}</p>
      <img className="beerimg" src={beerimg} alt="beerImage"/>
      <div>
        {props.order.order.map((item) => {
          return <p className="order-details">{item}</p>;
        })}
      </div>

      <p> # {props.order.id}</p>
    </div>
  );
}

export default Order;
