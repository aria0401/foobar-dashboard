import React,{useState} from "react";
import Ready from "./Ready";



function ReadyList(props) {
  const [ready, setReady] = useState(new Set([]));

  return (
    <div className="ReadyList panel">
        <h1 id="highlight-title">Ready To Go!</h1>
      {/* {props.data.serving.map((item, i) => {
        return <Ready key={i}  ready={item} />;
      })} */}
    </div>
  );
  
}

export default ReadyList;
