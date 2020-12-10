import React from "react";
import beerImages from "./BeerImages";

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
console.log(levels);

const tapsName = [];
levels.forEach(e =>{
  tapsName.push(e.name);
})
console.log(tapsName)

  return (
    <div className="MostSoldBeer panel">
      <h1 id="highlight-title">Most Wanted Tap</h1>
   
      
      

        {beerImages.map((beerImage, index) => {
          if (tapsName[0] === beerImage.name) {
            return (
             
              <img
                key={index}
                className="beer-tap-img"
                alt="beerImage"
                src={process.env.PUBLIC_URL + beerImage.linkImg}
              />
             
            );
          }
          return<div key={index}></div>
})}
      
 <div className="readyNr">
        <p>{firstOne.name}</p> 
       
        </div>
    </div>
  );
}

export default MostSoldBeer;
