import React, { useState } from "react";
import axios from "axios";
const JobModal = ({ isModalOpen, setIsModalOpen }) => {
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const [credentials, setCredentials] = useState({
    jobtitle: "",
    salary: 0,
    joblocation: "",
    jobtype: "",
    jobdescription1: "",
    jobdescription2: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault(); 

    
    const formData = new FormData(e.target);
    const updatedCredentials = {
      jobtitle: formData.get("jobtitle"),
      salary: formData.get("salary"),
      joblocation: formData.get("joblocation"),
      jobtype: formData.get("jobtype"),
      jobdescription1: formData.get("jobdescription1"),
      jobdescription2: formData.get("jobdescription2"),
    };

    setCredentials(updatedCredentials);
    console.log("Updated Credentials:", updatedCredentials);

    const response = await axios.post("http://localhost:8080/uploadjob",updatedCredentials)

    if(response.data.code === 200)
    {
        alert("job uploaded successfull")
        toggleModal()
    }
    else
    {
        alert("uploading failed")
    }
  };

  return (
    <div>
      {isModalOpen && (
        <div
          id="crud-modal"
          className="fixed inset-0 z-50 flex justify-center items-center bg-gray-800 bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Job
              </h3>
              <button
                onClick={toggleModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="p-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4">
                <div>
                  <label
                    htmlFor="jobtitle"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Job Role
                  </label>
                  <input
                    type="text"
                    name="jobtitle"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500"
                    placeholder="Type Job Role"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="salary"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Salary
                  </label>
                  <input
                    type="number"
                    name="salary"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500"
                    placeholder="Enter salary"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="joblocation"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Job Location
                  </label>
                  <select
                    name="joblocation"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500"
                    required
                  >
                    <option value="">Select location</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="bangalore">Bangalore</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="jobtype"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Job Type
                  </label>
                  <select
                    name="jobtype"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500"
                    required
                  >
                    <option value="">Select type</option>
                    <option value="work-from-home">Work From Home</option>
                    <option value="work-from-office">Work From Office</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="jobdescription1"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Job Description 1
                  </label>
                  <textarea
                    name="jobdescription1"
                    rows="2"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500"
                    placeholder="Write job description here"
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="jobdescription2"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Job Description 2
                  </label>
                  <textarea
                    name="jobdescription2"
                    rows="2"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500"
                    placeholder="Write description here"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add New Job
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobModal;
