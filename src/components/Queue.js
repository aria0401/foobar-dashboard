import React from "react";
import QueueList from "./QueueList";

function Queue(props) {
  const queueArray = props.data.queue;
  return (
    <div className="Queue panel">
      <div className="queue-header">
        <h1>Queue</h1>
      </div>

      <QueueList orders={queueArray} />
    </div>
  );
}

export default Queue;
