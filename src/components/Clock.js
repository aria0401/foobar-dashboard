import React, { useState } from "react";
import AnalogClock from "analog-clock-react";

function Clock(props) {
  const [time, setTime] = useState("");

  // inspired from https://ww.devcamp.com/trails/31/campsites/261/guides/calculating-time-react
  // remaining time to close the foobar
  function closeTime() {
    const date = new Date();
    const NewDate = date.getDate();
    const Month = date.getMonth() + 1;
    const Year = date.getFullYear();

    const closingTime = new Date(
      `${Month} ${NewDate}, ${Year} ${props.data.bar.closingTime}`
    ).getTime();

    const differnce = closingTime - date;

    let hours = Math.floor(
      (differnce % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((differnce % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((differnce % (1000 * 60)) / 1000);

    setTime(
      `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }:${seconds < 10 ? `0${seconds}` : seconds}`
    );

    if (differnce < 0) {
      setTime("we are closed");
    }
  }
<<<<<<< HEAD

  let options = {
    useCustomTime: false,
    width: "150px",
=======
//https://www.npmjs.com/package/analog-clock-react
  let options = {
    useCustomTime: false,
    width: "100px",
>>>>>>> 4f5ee700615635df7d8c773509849d0955dc7f2c
    border: true,
    borderColor: "#F7B71E",
    baseColor: "#262e3b",
    centerColor: "#F7B71E",
    centerBorderColor: "transparent",
    handColors: {
      second: "#transparent",
      minute: "#F7B71E",
      hour: "#F7B71E",
    },
  };

<<<<<<< HEAD
=======
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getTime();
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

>>>>>>> 4f5ee700615635df7d8c773509849d0955dc7f2c
  setInterval(closeTime, 1000);

  return (
    <div className="Clock">
      <div className="clock">
        <AnalogClock {...options} />
      </div>
      <h1 className="title">Closing In {time}</h1>
    </div>
  );
}

export default Clock;
