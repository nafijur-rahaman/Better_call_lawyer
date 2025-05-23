import React from 'react';
import { Link, NavLink } from 'react-router';

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

<NavLink 
  to="/"
  className={({ isActive }) =>
    isActive 
      ? 'cursor-pointer font-semibold text-lg  underline decoration-[#0EA106] underline-offset-8' 
      : 'cursor-pointer font-semibold text-lg hover:text-[#0EA106]'
  }
>
  Home
</NavLink>

<NavLink 
  to="/bookings"
  className={({ isActive }) =>
    isActive 
      ? 'cursor-pointer font-semibold text-lg underline decoration-[#0EA106] underline-offset-8 ' 
      : 'cursor-pointer font-semibold text-lg hover:text-[#0EA106]'
  }
>
  My-Bookings
</NavLink>

<NavLink 
  to="/blogs"
  className={({ isActive }) =>
    isActive 
      ? 'cursor-pointer font-semibold text-lgunderline decoration-[#0EA106] underline-offset-8 underline' 
      : 'cursor-pointer font-semibold text-lg hover:text-[#0EA106]'
  }
>
  Blogs
</NavLink>

<NavLink 
  to="/error"
  className={({ isActive }) =>
    isActive 
      ? 'cursor-pointer font-semibold text-lgunderline decoration-[#0EA106] underline-offset-8 underline' 
      : 'cursor-pointer font-semibold text-lg hover:text-[#0EA106]'
  }
>
  Contact Us
</NavLink>

                            
                            
                            
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