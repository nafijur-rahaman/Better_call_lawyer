import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <nav className='max-w-full xl:max-w-[1200px] 2xl:max-w-[1500px] mx-auto'>
                <div className="logo-container flex gap-5 justify-between items-center py-5">
                    <div className="logo-img flex justify-center items-center gap-3">
                        <img src="/logo.png" alt="" />
                        <Link to={"/"}><h1 className='text-2xl font-bold'>Better Call Lawyer</h1></Link>
                    </div>
                    <div className="nav-links ">
                        <ul className="flex nav-items justify-center items-center gap-10 text-lg ">
                      <Link to={"/"} ><li><button className='cursor-pointer'  >Home</button></li></Link>
                      <Link to={'/bookings'} ><li><button className='cursor-pointer' >My-Bookings</button></li></Link>
                      <Link to={'/blogs'} ><li><button className='cursor-pointer' >Blogs</button></li></Link>
                      <Link to={'error'} ><li><button className='cursor-pointer' >Contact Us</button></li></Link>
                            
                            
                            
                        </ul>
                    </div>

                    <div className="contact-btn">
                   <Link to={'/error'}>
                         <button className="contact cursor-pointer bg-[#0EA106] px-5 py-2 rounded-xl text-white font-semibold">
                            Contact Now
                        </button>
                   </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;