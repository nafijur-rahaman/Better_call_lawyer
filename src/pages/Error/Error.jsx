import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="errorbox max-w-full xl:max-w-[1200px] 2xl:max-w-[1500px] mx-auto ">
             <div className="img flex  justify-center">
                <img className='w-[400px]' src="/error.jpg" alt="" />
             </div>
             <div className="details text-center space-y-2">
             <h1 className="text-3xl font-bold text-[#ff0000] text-center">404 - Page Not Found</h1>
             <h1 className="text-3xl font-bold text-center"></h1>
             <Link reloadDocument to={"/"}><button className="bg-[#0EA106] px-5 cursor-pointer py-2 rounded-xl text-white font-semibold">Back to Home</button></Link>
             </div>
            </div>
        </div>
    );
};

export default Error;