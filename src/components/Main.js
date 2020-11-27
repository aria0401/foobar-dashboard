import React from "react";
import Queue from "./Queue";
import Clock from "./Clock";
import Serving from "./Serving";
import ReadyList from "./ReadyList";
import Crew from "./Crew";
import Taps from "./Taps";

function Main() {
  return (
    <div className="Main">
      <Clock />
      <Serving />
      <ReadyList />
      <Crew />
      <Taps />
      <Queue />
    </div>
  );
}

export default Main;
