import React from 'react'

const SecondComponent = ({setUsername,setPassword}) => {
  return (
    <>
    {/* <div>I am second component</div> */}
    <div>
        <label htmlFor="">Enter your Name</label>
        <input type="text" onChange={(e)=>{setUsername(e.target.value)}}  /> 
        <label htmlFor="">Enter your password</label>
        <input type="text" onChange={(e)=>{setPassword(e.target.value)}} />
    </div>
    </>
  )
}

export default SecondComponent
