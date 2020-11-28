import  React, { useState , useEffect } from 'react'

function Clock(props) {
  const [date,setDate] = useState(new Date());

  
 
  useEffect(() => {
    var timer = setInterval(()=>setDate(new Date()), 1000 )
    return function cleanup() {
        clearInterval(timer)
    }

});

return(
  <div className="Clock panel">
     <h1>Clock</h1>
     <p>Closing: {props.data.bar.closingTime}</p>
        <p> Time : {date.toLocaleTimeString()}</p>
        <p> Date : {date.toLocaleDateString()}</p>

    </div>
)
}

export default Clock;

    
    