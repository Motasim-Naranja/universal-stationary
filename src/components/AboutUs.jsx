import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">About Universal Stationary</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section - Description */}
          <div className="text-lg leading-relaxed text-gray-700 space-y-6">
            <p className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              Universal Stationary is your one-stop shop for all your stationary needs. From high-quality office supplies to essential school items, we offer a diverse range of products from top brands like Dollar, Piano, Signature, Staples, and Fox.
            </p>
            <p className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              Established with a commitment to quality and customer satisfaction, we have grown to become a trusted name in the industry.
            </p>
            <p className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-3" />
              Our mission is to provide reliable and affordable stationary products that meet the needs of both professionals and students alike.
            </p>
          </div>

          {/* Right Section - Image or Graphics */}
          <div className="flex justify-center items-center">
            <img
              src="https://stationers.pk/cdn/shop/articles/7_Must_Have_Student_Stationery_Supplies_In_High_School.jpg?v=1635331870"
              alt="Stationary Products"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>

        {/* Bottom Section - Extra Info */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-800 font-semibold">We look forward to serving you!</p>
          <Link to="/products">
            <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full transition duration-300">
              Explore Our Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
