import React from "react";
import Bartender from "./Bartender";

function Crew(props) {
  const bartendersArray = props.data.bartenders;

  return (
    <div className="Crew panel">
      <h1>Crew</h1>
      <div className="crew-wrapper">
        {bartendersArray.map((bartender, bartendersKey) => {
          return <Bartender key={bartendersKey} bartender={bartender} />;
        })}
      </div>
    </div>
  );
}

export default Crew;
