import React, { useEffect, useState } from 'react' ;

const Timer=()=>{
const[timer,setTimer]= useState(60) ;
useEffect(()=>{
  const id=setInterval(()=>{
    if(timer<1){
      clearInterval(id);
      setTimer(60);
    }
    else{
      setTimer(timer-1)
    }
  },1000) ;
  return ()=>{
    clearInterval(id)
  }
},[timer])


return <div>Timer:{timer}</div>
}

export default Timer ;