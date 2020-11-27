import React from "react";
import QueueList from "./QueueList";

function Queue(props) {
  const queueArray = props.data.queue;
  return (
    <div className="Queue panel">
      <h1>Queue</h1>
      <div className="queue-header"></div>

      <QueueList orders={queueArray} />
    </div>
  );
}

export default Queue;


