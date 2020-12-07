import React from "react";
import QueueOrder from "./QueueOrder";

function QueueList(props) {
  return (
    <div className="QueueList">
      {props.orders.map((item, i) => {
        return <QueueOrder key={i} lineNumber={i} order={item} />;
      })}
    </div>
  );
}

export default QueueList;
