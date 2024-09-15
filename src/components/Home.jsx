// import React from 'react'
// import productsData from '../data/productsData.json'
// import { Link } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa';


// const Home = () => {

//   return (
//     <>

// <div className="min-h-screen bg-gray-100">
//       {/* Hero Section */}
//       <section className="bg-blue-600 text-white py-12">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-3xl font-bold mb-4">Welcome to Universal Stationary</h1>
//           <p className="text-lg mb-6">Discover a wide range of high-quality stationary items from top brands.</p>
//           <Link to="/products" className="inline-block bg-yellow-500 text-black py-2 px-4 rounded">
//             Shop Now <FaArrowRight className="inline ml-2" />
//           </Link>
//         </div>
//       </section>

//       {/* Featured Products Section */}
//       <section className="py-12">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {productsData.slice(0, 6).map(product => (
//               <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
//                 <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//                 <div className="p-4">
//                   <h3 className="text-lg font-bold mb-2">{product.name}</h3>
//                   <p className="text-gray-600 mb-2">{product.summary}</p>
//                   <p className="text-yellow-500 font-semibold">{product.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
    
//     </>
//   )
// }

// export default Home


// responsive

import React from 'react';
import productsData from '../data/productsData.json';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Universal Stationary</h1>
          <p className="text-lg md:text-xl mb-6">Discover a wide range of high-quality stationary items from top brands.</p>
          <Link to="/products" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-6 rounded transition duration-300 ease-in-out">
            Shop Now <FaArrowRight className="inline ml-2" />
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.slice(0, 6).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.summary}</p>
                  <p className="text-yellow-500 font-semibold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
