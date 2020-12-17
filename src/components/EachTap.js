import React from "react";
import beerImages from "./BeerImages";

export default function EachTap(props) {
  const capacity = props.item.capacity / 90;
  const level = props.item.level / 130;

  return (
    <div className="each-tap">
      <div className="capacity" style={{ height: capacity + "vh" }}></div>
      <div className="level" style={{ height: level + "vh" }}></div>
      <p>{props.item.beer}</p>
      {beerImages.map((beerImage, index) => {
        if (props.item.beer === beerImage.name) {
          return (
            <img
              key={index}
              className="tap-img"
              alt="beerImage"
              src={process.env.PUBLIC_URL + beerImage.linkImg}
            />
          );
        }
        return <div></div>;
      })}
    </div>
  );
}
