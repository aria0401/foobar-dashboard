import React from "react";
import beersimg from "../media/toast.svg";

function MostSoldBeer(props) {

  let levels = [];
  const taps = props.data.taps;
  taps.forEach(tap => {
    levels.push({'name': tap.beer, 'level':tap.level})
  });


  levels.sort(function(a,b) {
      return a.level - b.level;
  });

  const firstOne = levels[0];
  const secondOne = levels[1];
  const thirdOne = levels[2];
console.log(levels);

  return (
    <div className="MostSoldBeer panel">
      <h1 id="highlight-title">Most sold at the moment</h1>
   
       <div className="readyNr">
        <p> <span>Number One:</span> {firstOne.name}</p> 
        <p> <span>Number Two:</span> {secondOne.name}</p> 
        <p> <span>Number Three:</span> {thirdOne.name}</p> 
        </div>
    </div>
  );
}

export default MostSoldBeer;
