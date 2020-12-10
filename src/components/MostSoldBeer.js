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
    <div className="MostSoldBeer">
      <div className="readyNr">
        <h1>{firstOne.name}</h1> 
       
        </div>
      <div id="mostSoldP">
      <p > Most Sold Draft </p>
      </div>
      
       
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
 
    </div>
  );
}

export default MostSoldBeer;
