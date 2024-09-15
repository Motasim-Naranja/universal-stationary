// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <>
//       <nav className=' bg-blue-900 text-white flex justify-around py-6 sticky top-0 shadow-md shadow-slate-600 z-50' >
//           <h2><Link to="/">U_Stationary</Link></h2>
//           <ul className='flex gap-10'>
//             <li><Link to="/">home</Link> </li>
//             <li><Link to="/products">Products</Link> </li>
//             <li><Link to="/brands">Brands</Link> </li>
//             <li><Link to="/about_us">About us</Link> </li>
//             <li><Link to="/contact_us">Contact Us</Link> </li>
//           </ul>
//       </nav>
//     </>
//   )
// }

// export default Navbar


// navbar

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // For hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-blue-900 text-white py-6 sticky top-0 shadow-md shadow-slate-600 z-50'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        {/* Logo */}
        <h2 className='text-2xl font-bold'>
          <Link to="/">U_Stationary</Link>
        </h2>

        {/* Hamburger Icon for mobile */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links for large screens */}
        <ul className='hidden lg:flex gap-10'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/brands">Brands</Link></li>
          <li><Link to="/about_us">About Us</Link></li>
          <li><Link to="/contact_us">Contact Us</Link></li>
        </ul>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-blue-900 bg-opacity-95 p-10 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className='space-y-8 text-center'>
            <li onClick={toggleMenu}><Link to="/">Home</Link></li>
            <li onClick={toggleMenu}><Link to="/products">Products</Link></li>
            <li onClick={toggleMenu}><Link to="/brands">Brands</Link></li>
            <li onClick={toggleMenu}><Link to="/about_us">About Us</Link></li>
            <li onClick={toggleMenu}><Link to="/contact_us">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
