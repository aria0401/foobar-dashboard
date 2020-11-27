import React from "react";
import ServingOrder from "./ServingOrder"

function ServingList(props){
    return (
        <div className="ServingList">
          {props.serving.map((item, i) => {
            return <ServingOrder key={i} lineNumber={i} sevingOrder={item} />;
          })}
        </div>
      );
}

export default ServingList;