import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className=' bg-blue-900 text-white flex justify-around py-6 sticky top-0 shadow-md shadow-slate-600 z-50' >
          <h2><Link to="/">U_Stationary</Link></h2>
          <ul className='flex gap-10'>
            <li><Link to="/">home</Link> </li>
            <li><Link to="/products">Products</Link> </li>
            <li><Link to="/brands">Brands</Link> </li>
            <li><Link to="/about_us">About us</Link> </li>
            <li><Link to="/contact_us">Contact Us</Link> </li>
          </ul>
      </nav>
    </>
  )
}

export default Navbar