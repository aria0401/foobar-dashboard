import React from "react";
import beersimg from "../media/toast.svg";

function ReadyList(props) {
  console.log(props);
  return (
    <div className="ReadyList panel">
      <h1 id="highlight-title">Ready To Go!</h1>
      {props.data.serving.map((item, i) => {
        return (
          <div key={i}>
            <img className="beersimg" src={beersimg} alt="beersImage" />
            <h1 className="readyNr">{item.id}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default ReadyList;
