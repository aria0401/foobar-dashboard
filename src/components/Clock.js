import  React, { useState, useEffect} from 'react'
import AnalogClock from 'analog-clock-react';

function Clock(props) {

const [time, setTime] = useState("");

let date = new Date();
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
  },
  seconds: date.getSeconds(),
  minutes: date.getMinutes(),
  hours: date.getHours()
};

// this.interval = setInterval(this.updateClock, 1000);


// inspired from https://ww.devcamp.com/trails/31/campsites/261/guides/calculating-time-react
// remaining time to close the foobar
function getTime() {
  const date = new Date();
  const NewDate = date.getDate();
  const Month = date.getMonth() + 1;
  const Year = date.getFullYear();

  const closingTime = new Date(`${Month} ${NewDate}, ${Year} ${props.data.bar.closingTime}`).getTime();

     
  const differnce = closingTime - date;

      // let days = Math.floor(differnce / (1000 * 60 * 60 * 24));
      let hours = Math.floor((differnce % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((differnce % (1000 * 60 * 60)) / (1000 * 60));
      // let seconds = Math.floor((differnce % (1000 * 60)) / 1000);

      setTime(
        `${hours < 10 ? `0${hours}` : hours}h & ${minutes < 10 ? `0${minutes}` : minutes }m`
                );
                if (differnce  < 0) {
                 setTime("we are closed")
              }
}

useEffect(() => {
  const interval = setInterval(() => {
    getTime();
  }, 1000);
  return () => clearInterval(interval);
}, []);
    
// setInterval(
//   getTime,
//  1000);


return(
  <div className="Clock">

      <div className="clock">   
        <AnalogClock {...options} />
      </div>
     <h1 className="title" >Closing In: {time}</h1>
     
    
    </div>
)
}

export default Clock;

    
    