import React from "react";
import Queue from "./Queue";
import Clock from "./Clock";
import Serving from "./Serving";
<<<<<<< HEAD
=======
import MostSoldBeer from "./MostSoldBeer";
>>>>>>> 195a0d184a507c689693cf58b86963bff0649398
import Crew from "./Crew";
import Taps from "./Taps";

function Main(props) {
  const data = props.data;

  return (
    <div className="Main">
      <Clock data={data} />
      <Serving data={data} />
<<<<<<< HEAD
      <Crew data={data} />
      <Taps data={data} />
      <Queue data={data} />
=======
      <MostSoldBeer data={data} />
      <Crew data={data}/>
      <Taps data={data}/>
      <Queue data={data} />
     
     

>>>>>>> 195a0d184a507c689693cf58b86963bff0649398
    </div>
  );
}

export default Main;
