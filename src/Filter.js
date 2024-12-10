import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import PriceFilter from "./PriceFilter";
import axios from "axios";

const Filter = ({setjobdata}) => {
  const [jobtitle, setjobtitle] = useState("");
  const [joblocation, setjoblocation] = useState("");
  const [jobtype, setjobtype] = useState("");
  const [salary, setSalary] = useState({
    minsalary: 0,
    maxsalary: 100000,
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") setjobtitle(value);
    if (name === "location") setjoblocation(value);
    if (name === "jobtype") setjobtype(value);
  };

  const GetTheJobs = async ({ jobtitle, joblocation, jobtype, salary }) => {
    const resp = await axios.post("http://localhost:8080/fetchjob", {
      jobtitle,
      joblocation,
      jobtype,
      salary,
    });

    console.log(resp.data);
    setjobdata(resp.data)
  };

  useEffect(() => {
    console.log(salary)
    GetTheJobs({ jobtitle, joblocation, jobtype, salary });
  }, [jobtitle, joblocation, jobtype, salary]);
  return (
    <div className="flex flex-wrap items-center gap-3 p-4 shadow-md rounded-full max-w-[1200px] mb-5 w-full mx-auto ">
      <input
        type="text"
        name="title"
        placeholder="Search by job title ,Role"
        className="flex border-none outline-none  items-center flex-1 "
        onChange={(e) => {
          onChange(e);
        }}
      />

      {/* This is for line bw inputs */}
      <div className=" w-[1px] h-8 bg-gray-300"></div>

      <select
        name="location"
        className="flex items-center flex-1  border-none outline-none "
        onChange={(e) => {
          onChange(e);
        }}
      >
        <option value="">Select joblocation</option>
        <option value="hyderabad">Hyderabad</option>
        <option value="delhi">Delhi</option>
        <option value="gurgaon">Gurgaon</option>
        <option value="bengalurur">Bengaluru</option>
      </select>

      {/* This is for line bw inputs */}
      <div className=" w-[1px] h-8 bg-gray-300"></div>

      <select
        name="jobtype"
        onChange={(e) => {
          onChange(e);
        }}
        className="flex items-center flex-1  border-none outline-none "
      >
        <option value="">Job type</option>
        <option value="work-from-office">Work From Office</option>
        <option value="work-from-home">Work From Home</option>
        <option value="hybrid">Hybrid</option>
      </select>

      {/* This is for line bw inputs */}
      <div className=" w-[1px] h-8 bg-gray-300"></div>

      <PriceFilter salary={salary} setSalary={setSalary} />
    </div>
  );
};

export default Filter;
