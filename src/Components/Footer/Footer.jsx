import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
<footer className="footer flex flex-col items-center bg-black text-white p-10 ">
  <div className="footer-logo flex items-center gap-3">
    <img src="/logo-footer.png" alt="Logo" className="w-10 h-10" />
    <h1 className="text-2xl font-bold">Better Call Lawyer</h1>
  </div>

  <ul className="flex gap-5">
    <Link to="/"><li><button className="cursor-pointer">Home</button></li></Link>
    <Link to="/bookings"><li><button className="cursor-pointer">My-Bookings</button></li></Link>
    <Link to="/blogs"><li><button className="cursor-pointer">Blogs</button></li></Link>
    <Link to="/error"><li><button className="cursor-pointer">Contact Us</button></li></Link>
  </ul>


<div className="w-full h-px border-t border-dashed border-[#f7f7f730] my-4"></div>
  <div className="social-logo flex gap-10 ">
    <a href="https://nafijurrahaman.netlify.app/" target="_blank" rel="noopener noreferrer">
      <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
    </a>
    <a href="https://github.com/nafijur-rahaman" target="_blank" rel="noopener noreferrer">
      <img src="/github.png" alt="Twitter" className="w-6 h-6" />
    </a>
    <a href="https://linkedin.com/in/nafijur-rahaman" target="_blank" rel="noopener noreferrer">
      <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
    </a>
  </div>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
  </aside>
</footer>

    );
};

export default Footer;