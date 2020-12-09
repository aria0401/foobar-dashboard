import React, {useState} from "react";
import ServingList from "./ServingList";
import ReadyList from "./ReadyList"

function Serving(props) {
  const servingArray = props.data.serving;
  const [ready, setReady]=useState(new Set([]));

//  const setReady = ()=>{
//    useState(new Set(servingArray));

//  }


  // console.log(servingArray,"servingArray");
  console.log(ready,"Ready");
  

  return (

    <div className="Serving panel">
      <h1>Serving</h1>
      
      <ServingList serving={servingArray} />
      <ReadyList />
    </div>
  );
}

export default Serving;



