import React, { useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({lawyers}) => {
    const [showAll, setShowAll]=useState(false);
    const handleShowAll =()=>{
        setShowAll(!showAll);
    }

    const data= showAll ? lawyers : lawyers.slice(0,6);
    return (
        <div className='max-w-full xl:max-w-[1200px] 2xl:max-w-[1500px] mx-auto py-10'>
       <div className="heading text-center">
             <h1 className='text-4xl font-bold'>Our Best Lawyers</h1>
            <p className='w-3/4 mx-auto py-3 text-[#0F0F0F80]'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
       </div>
        
        <div className="lawyer-card-container border grid grid-cols-1 md:grid-cols-2  gap-5  border-[#0F0F0F30] rounded-lg p-5">
      {
                data.map(lawyer=> <Lawyer key={lawyer.id} lawyer={lawyer} handleShowAll={handleShowAll} ></Lawyer>)
            }

        </div>
                     <div className='flex justify-center w-full' >
      {
                !showAll && <button onClick={handleShowAll} className='border mt-5  border-[#176AE520] bg-[#0EA106] text-white px-7 cursor-pointer  py-1 rounded-2xl '>Show All Lawyers</button>
      }
            </div>
           
        </div>
    );
};

export default Lawyers;