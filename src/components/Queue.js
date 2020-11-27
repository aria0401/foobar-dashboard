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

// import React from "react";

// export default function Queue(props) {
//     const queueArray = props.data.queue;

//     return (
//       <div>
//         <h2>There is {queueArray.length} person in line</h2>

//         {queueArray.map((id) => {
//     console.log(id)
//     return <p>Ticket Number : {id.id}</p>;
//         })}
//       </div>
//     );
//   }
