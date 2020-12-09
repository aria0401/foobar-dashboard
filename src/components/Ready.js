import React, {useState} from "react";

export default function Ready(props){



// const [ready, setReady] = useState([]);

// const storedId = props.ready.id;

//     ready.push(storedId);
//   let filteredIds =  ready.filter( function(item,i,arr){
//      return (i===0) || ( item !== arr[i-1] );
//   });

// if(filteredIds.length >= 5){
//     filteredIds.shift();
// }
// console.log(filteredIds,"yesssss")   

// console.log(ready,"me");
// console.log(storedId,"test1");



return(

   <div className="readyTest">
  
    <p className="readyNr">{props.ready.id}</p>
</div>
   
);


}