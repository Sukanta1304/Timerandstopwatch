import React, { useState } from 'react' ;
function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
const Stopwatch=()=>{
  const [timerId,setId]=useState(null)
const [watch,setWatch]=useState(1000) ;

const start=()=>{
  if(!timerId){
    let id=setInterval(()=>{
      setWatch((prev)=>prev+1000)
      },1000);
      setId(id)
  }

}
const pause=()=>{
clearInterval(timerId);
setId(null)
}

const reset=()=>{
  clearInterval(timerId);
  setWatch(0);
  setId(null)
}

return <div>StopWatch:{msToTime(watch)}
<div>
<button onClick={start}>Start</button>
<button onClick={pause}>Pause</button>
<button onClick={reset}>Reset</button>
</div>
</div>
}

export default Stopwatch ;