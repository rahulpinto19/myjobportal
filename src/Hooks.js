import React, { useEffect, useRef, useState } from 'react'

const Hooks = () => {


  const [count,setCount] = useState(0)
  // let cnt = useRef(0)
useEffect(()=>
{
    alert("I will be called whenever Hook is rendered")
})
useEffect(()=>
{
  alert("I will be called firt time at the rendering")
},[])
useEffect(()=>
{
  alert("I will be called when count is changed")
},[count])

  return (
    <div>
        {/* <div>The count value is : {cnt.current}</div>
        <button onClick={()=>{
            cnt.current+=1
            alert(`cnt : ${cnt.current} `);
        }}>Increment by 1</button> */}

        <div>{count}</div>
        <button onClick={()=>{setCount(count+1)}}>Increment by 1</button>
    </div>
  )
}

export default Hooks
