import  React, { useState , useEffect } from 'react'
import AnalogClock from 'analog-clock-react';

function Clock(props) {
//   const [date,setDate] = useState(new Date());

  
 
//   useEffect(() => {
//     var timer = setInterval(()=>setDate(new Date()), 1000 )
//     return function cleanup() {
//         clearInterval(timer)
//     }

// });
const [time, setTime] = useState("");
  let initialTime = true;

  function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    if (seconds === 0 || initialTime) {
      setTime(
        `${hours < 10 ? `0${hours}` : hours}${seconds % 2 === 0 ? ":" : " "}${
          minutes < 10 ? `0${minutes}` : minutes
        }`
      );
      initialTime = false;
    }
  }
 
  

    setInterval(
      getTime,
     1000);

let options = {
  width: "150px",
  border: true,
  borderColor: "#F7B71E",
  baseColor: "black",
  centerColor: "#F7B71E",
  centerBorderColor: "transparent",
  handColors: {
    second: "#transparent",
    minute: "#F7B71E",
    hour: "#F7B71E"
  }
};



return(
  <div className="Clock panel">
     <h1>Clock</h1>
     <p> Closing At: {props.data.bar.closingTime}</p>
        {/* <p> Time : {date.toLocaleTimeString()}</p>
        <p> Date : {date.toLocaleDateString()}</p> */}
        <div>{time}</div>
        <div className="test">
        <AnalogClock {...options} /></div>
    </div>
)
}

export default Clock;

    
    