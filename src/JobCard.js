import React from "react";
import amazonLogo from "./Assets/amazon.png";
import swiggy from "./Assets/swiggy.png"
import exp from "./Assets/exp.png"
import jobType from "./Assets/jobtype.png"
import salary from "./Assets/sal.png"
const JobCard = ({jobdetails}) => {

  const Jobcardlogos = [amazonLogo,swiggy]
  const dict =
  {
    "work-from-home":"wfh",
    "work-from-office":"wfo",
    "hybrid":"hyb"
  }
  const timeSinceCreation = (date) => {
    const now = new Date();
    const createdDate = new Date(date);
    const differenceInSeconds = Math.floor((now - createdDate) / 1000);

    if (differenceInSeconds < 60) return `${differenceInSeconds} seconds ago`;
    else if (differenceInSeconds < 3600) return `${Math.floor(differenceInSeconds / 60)} minutes ago`;
    else if (differenceInSeconds < 86400) return `${Math.floor(differenceInSeconds / 3600)} hours ago`;
    else return `${Math.floor(differenceInSeconds / 86400)} days ago`;
  };



  return (
    <div className="bg-white border border-gray-300 rounded-lg p-5 w-full shadow-lg box-border">
      {
        console.log(jobdetails)
      }
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center h-20 w-20 p-2 bg-{#f8f9fbf6} rouded-lg shadow-md mt-2 ml-2">
          <img
            src={amazonLogo}
            alt="no img"
            className="w-16 h-16 rounded-full object-cover bg-[#f8f9fa]"
          />
        </div>
        <span className="bg-blue-100 text-black px-2 py-1 rouded text-xs mt-[-50px]">
          {timeSinceCreation(jobdetails.createdAt)}
        </span>
      </div>
      {/* role */}
      <div className="mt-3"></div>
      <h3 className="text-md font-bold text-gray-700">
            {jobdetails.jobtitle}
      </h3>
        {/* details */}
        <div className=" flex flex-wrap mt-2 text-sm text-gray-500">
            <div className="flex items-center mr-3 mb-1">
                <img src={exp} alt="" />
                {dict[jobdetails.jobtype]}
            </div>
            <div className="flex items-center mr-3 mb-1">
                <img src={jobType} alt="" />
                {jobdetails.joblocation}
            </div>
            <div className="flex items-center mr-3 mb-1">
                <img src={salary} alt="" />
                {jobdetails.salary}
            </div>

        </div>
        {/* description */}

        <div className="mt-3 text-[12px] text-gray-600">

            <ul className="list-disc pl-5">

                <li>{jobdetails.jobdescription1}</li>
                <li>{jobdetails.jobdescription2}</li>
                
            </ul>
        </div>

        <button className="w-full mt-4 bg-blue-400  text-white rounded-md py-2 hover:bg-blue-700 transition-all " onClick={()=>{alert("you have applied for this job")}} >

        Apply Now
        </button>

    </div>
  );
};

export default JobCard;
