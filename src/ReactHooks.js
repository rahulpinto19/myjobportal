import React, { useEffect, useRef, useState } from 'react'

const ReactHooks = () => {
    // const [count,setCount] = useState(0)
    let count = 0
    const [cnt,setcnt] = useState(0)
    let ct = useRef(0)
    useEffect(()=>
    {
        alert("I wil be called whenever I am loaded")
    })
    useEffect(()=>
        {
        alert("onlyu on particular values")
 
    },[])
    useEffect(()=>
    {
        alert("when c9ount is changed")
    },[cnt])
  return (
    <div>
        <div>{count}</div>
        <button onClick={()=>{count = count+1}}> click the button</button>

        <div>{cnt}</div>
        <button onClick={()=>{setcnt(cnt+1)}}> click the button</button>
        
        <div>Ref ct: {ct.current}</div>
      <button
        onClick={() => {
          ct.current += 1;
          alert(`Updated Ref ct: ${ct.current}`);
        }}
      >
        Increment Ref ct
      </button>
    </div>
  )
}

export default ReactHooks
