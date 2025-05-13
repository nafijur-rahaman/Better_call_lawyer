import React from 'react';
import { Link, useParams } from 'react-router';

const LawyerError = () => {
    const param = useParams();
    console.log(param)
    return (
        <div className='max-w-full  xl:max-w-[1200px] 2xl:max-w-[1500px] mx-auto py-10 '>
            <div className='text-center '>
                <h1 className='text-3xl font-bold'>No Lawyer Found</h1>
                <p className='py-1 text-[#0F0F0F80] '>No Lawyer Found on this license No:-</p>
                <p className='py-1 font-semibold'>{param.license_number}</p>
                <Link reloadDocument to={"/"}>
                    <button className='bg-[#0EA106]  text-white px-7 cursor-pointer  py-2 rounded-2xl '>View All Lawyers</button>
                </Link>
            </div>
        </div>
    );
};

export default LawyerError;