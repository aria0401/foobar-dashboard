import React from "react";

function ServingOrder(props) {
  const order = props.sevingOrder.order.length;
  console.log(
    "the order is for ",
    order,
    " beers and will take ",
    order * 5,
    " seconds"
  );
  return (
    <div className="serving">
      {/* <p className="highlight line-number"> {props.lineNumber + 1} </p> */}
      <div>
        <div id="glass">
          <div id="beer">
            <span
              id="span"
              style={{
                animation: "beer " + order * 5 + " infinite",
                animation: "beer 5s infinite",
              }}
            ></span>
          </div>
        </div>
        <div id="handle"></div>
        <div id="bubble_1">
          <span id="bb"></span>
        </div>
        <div id="bubble_2">
          <span id="bb"></span>
        </div>
        <div id="bubble_3">
          <span id="bb"></span>
        </div>
        <div id="bubble_4">
          <span id="bb"></span>
        </div>
        <div id="bubble_5">
          <span id="bb"></span>
        </div>
        <div id="bubble_6">
          <span id="bb"></span>
        </div>
        <div id="bubble_7">
          <span id="bb"></span>
        </div>
        <div id="bubble_8">
          <span id="bb"></span>
        </div>
        <p className="order-number"> # {props.sevingOrder.id}</p>
      </div>
    </div>
  );
}

export default ServingOrder;
