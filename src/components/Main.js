import React, { useState, useEffect } from "react";
import { getData, getBeers } from "../modules/rest";
import Queue from "./Queue";
import Clock from "./Clock";
import Serving from "./Serving";
import ReadyList from "./ReadyList";
import Crew from "./Crew";
import Taps from "./Taps";

function Main() {
  const [data, setData] = useState({});
  const [beers, setBeers] = useState({});
  console.log(data);
  console.log(beers);
  useEffect(() => {
    getData(setData);
    getBeers(setBeers);

    setInterval(() => {
      getData(setData);
    }, 10000);
    getData(setData);
  }, []);

  return (
    <div className="Main">
     
      <Clock />
      {data.serving && <Serving data={data} />}
      <ReadyList />
      <Crew />
      <Taps />
      {data.queue && <Queue data={data} />}
    
    </div>
  );
}

export default Main;
