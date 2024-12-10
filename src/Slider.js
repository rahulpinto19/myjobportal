import React, { useState } from "react";

const Slider = ({salary,setSalary}) => {
    const [values,setValues] = useState(salary)
    const handleChange = (()=>
    {

    })
  return (

    <div>
        
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={values}
        onChange={handleChange}
        min = {0}
        max = {100}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
      />
    </div>
  );
};

export default Slider;
