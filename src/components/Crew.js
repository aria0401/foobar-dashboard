import React from "react";



function Crew(props) {
 const bartendersArray = props.data.bartenders;

  return (
    <div className="Crew panel">
      <h1>Crew</h1>
      {bartendersArray.map((name, bartendersKey) => {
    return <p key={bartendersKey} > {name.name} is {name.statusDetail}</p>
  
        })}
    </div>
  );
}

export default Crew;
