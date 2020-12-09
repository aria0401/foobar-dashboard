import React from "react";
import EachTap from "./EachTap";


function Taps(props) {
  const tapsArray = props.data.taps;

  return(
    <div className="Taps panel">
      <h1 className="header-taps">Taps</h1>

      <div className="tap-bars">

     {tapsArray && tapsArray.map((item, index) => {
         
          return (
            <EachTap key={index} item={item} data={props.data} />
      
          );
        })}
         </div>
    </div>
  ) 
}














// function Taps(props) {
//   const tapsArray = props.data.taps;

//   return (
//     <div className="Taps panel ">
//       <h1>Taps</h1>

//       <div> 

//       <svg className="svgTaps" viewBox="0 0 100 100" > 

//       {tapsArray &&
//         tapsArray.map((item, index) => {
//           const height = item.capacity/50;
//           return (
//             <rect  key={index} fill="#F6C83F" x={item.id*12} y="0" width="7" rx="2" ry="2" height={height} />
//           );
//         })}

//         {tapsArray &&
//         tapsArray.map((item, index) => {
//           const height = item.level/50;
//           return (
//             <rect  key={index} fill="#E39C96" x={item.id*12} y="0" width="7" rx="2" ry="2" height={height} />
     
//           );
//         })}

//       </svg>
//       </div>
//     </div>
//   );
  
// }




export default Taps;
