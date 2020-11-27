import React from "react";
import QueueList from "./QueueList";

function Queue() {
  return (
    <div className="Queue panel">
      <h1>Queue</h1>
      <div className="queue-header"></div>
      <QueueList />
    </div>
  );
}

export default Queue;
