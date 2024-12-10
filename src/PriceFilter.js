import React, { useState } from "react";
import Slider from "react-slider";

const PriceFilter = ({ salary, setSalary }) => {
  const [values, setValues] = useState([salary.minsalary, salary.maxsalary]);
  
  const handleChange = (newValues) => {
    setValues(newValues);
 
    setSalary({minsalary:newValues[0],
        maxsalary:newValues[1]})
    
  };

  const formatSalary = (value) => {
    return `₹${value}`;
  };
  return (
    <div className="flex flex-col items-center">
         <div className="text-sm font-medium text-black mb-2">
        <strong>Salary Per Month</strong>{" "}
        <span className="font-mono text-right">
          {`${formatSalary(values[0])} - ${formatSalary(values[1])}`}</span>
      </div>
      <div className="relative w-full flex items-center h-8">
        <Slider
          value={values}
          className="h-[3px] w-full bg-black rounded-sm"
          onChange={(e)=>{handleChange(e)}}
          min={0}
          max={100000}
          valueLabelDisplay="auto"
          thumbClassName="absolute top-1/2 transform -translate-y-1/2 h-[12px] w-[12px] rounded-full bg-black cursor-grab shadow-md flex items-center justify-center"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
