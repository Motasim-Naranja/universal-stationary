// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Links = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">

                    {/* About Us Section */}
                    <div className="w-full sm:w-1/3 mb-6">
                        <h4 className="font-bold text-lg mb-2">About Universal Stationary</h4>
                        <p className="text-sm">
                            Universal Stationary offers a wide range of high-quality stationary items from top brands. Whether you're looking for office supplies or school essentials, we have everything you need to stay organized and productive.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="w-full sm:w-1/3 mb-6 flex flex-col text-center">
                        <h4 className="font-bold text-lg mb-2">Quick Links</h4>
                        <ul className="text-sm">
                            <li><Link to="/" className="hover:underline">Home</Link></li>
                            <li><Link to="/products" className="hover:underline">Products</Link></li>
                            <li><Link to="/brands" className="hover:underline">Brands</Link></li>
                            <li><Link to="/about_us" className="hover:underline">About Us</Link></li>
                            <li><Link to="/contact_us" className="hover:underline">Contact Us</Link></li>
                    
                        </ul>
                    </div>

                    {/* Contact Information Section */}
                    <div className="w-full sm:w-1/3 mb-6">
                        <h4 className="font-bold text-lg mb-2">Contact Us</h4>
                        <p className="text-sm">Address: Suite # 213, 2nd Floor, Progressive Center, PECHS Block 6, Main Shahrah-e-Faisal, Karachi, Pakistan.</p>
                        <p className="text-sm">Phone: +92-300-2066368</p>
                        <p className="text-sm">Email: <a href="mailto:info@universalstationary.com" className="hover:underline">info@universalstationary.com</a></p>
                        <div className="mt-4">
                            <a href="https://web.facebook.com/motasim.naranja" target='_blank' className="inline-block mr-4 text-white hover:text-gray-400"><FaFacebook /></a>
                            <a href="https://www.linkedin.com/in/motasim-ejaz-979342260/" target='_blank' className="inline-block mr-4 text-white hover:text-gray-400"><FaLinkedin /></a>
                            <a href="https://www.instagram.com/motasim_naranja/" target='_blank' className="inline-block mr-4 text-white hover:text-gray-400"><FaInstagram /></a>
                        </div>
                    </div>

                </div>

        
            </div>
        </footer>
    );
};

export default Links;
