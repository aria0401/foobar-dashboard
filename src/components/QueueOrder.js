import React from "react";

function Order(props) {
  return (
    <div className="Order">
      <p className="highlight line-number">{props.lineNumber + 1}</p>
      <p className="order-id highlight"> # {props.order.id}</p>

      <p className="order-details"> {props.order.order[0]} ...</p>
    </div>
  );
}

export default Order;
