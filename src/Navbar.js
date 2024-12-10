import React, { useState } from "react";
import JobModal from "./JobModal";
// import logo from "../../../insta/g-initial-gradient-colorful-logo-design_343694-1760.avif"
const Navbar = () => {
  const [isModalOpen,setIsModalOpen] = useState(false)
  return (
    <div>
      <nav className="absolute top-5  transform -translate-x-1/2 w-[700px] h-[60px] bg-white border border-gray-100 shadow-md rounded-full flex  justify-center">
        <ul className="flex items-center m-0 p-0 gap-4">
          <li>
            <img src={"logo"} alt="Alogo" className="h-10 w-auto" />
          </li>
          <li>
            <a
              href="/"
              className="text-black text-sm font-medium px-3 py-2 rounded-full hover:bg-gray-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-black text-sm font-medium px-3 py-2 rounded-full hover:bg-gray-200"
            >
              Find Jobs
            </a>
          </li>
          <li>
              
              <a href="/" className="text-black text-sm font-medium px-3 py-2 hover:bg-gray-200 rounded-full">
              Find Talent
            </a>
          </li>
          <li>
            <a  className="text-black text-sm font-medium px-3 py-2 hover:bg-gray-200 rounded-full">
              About us
            </a>
          </li>
          <li>
            <a className="text-black text-sm font-medium px-3 py-2 hover:bg-gray-200 rounded-full">
              TestiMonals
            </a>
          </li>
          <li>
            <button className="bg-purple-700 text-white text-sm font-medium px-5 py-2 rounded-full border-2 border-purple-300 shadow-lg hover:bg-purple-600 transition-all" onClick={()=>{setIsModalOpen(true)}}>
              Create Job
            </button>
          </li>
        </ul>
      </nav>
    
      
       
      <JobModal isModalOpen = {isModalOpen} setIsModalOpen = {setIsModalOpen}/>
    </div>
  );
};

export default Navbar;
