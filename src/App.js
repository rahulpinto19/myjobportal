import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Filter from './Filter';
import JobCard from './JobCard';
import JobModal from './JobModal';
import { useState } from 'react';
function App() {
  
  const [jobdata,setjobdata] = useState([])

  return (<>

      <div className='flex flex-col items-center pt-24 '>

        <Navbar/>
        
        <Filter setjobdata = {setjobdata}/>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  max-w-screen-xl'>

        {
          
          jobdata.result  ? (
            jobdata.result.map((job, key) => (
              <JobCard key={key} jobdetails={job} />
            ))
          ) : (
            <div>No jobs to show</div>
          )
        }
        </div>
                
        </div>
  </>)
}

export default App;
