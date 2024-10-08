import React, { useState } from 'react';
import productsData from '../data/productsData.json';
import { Link } from 'react-router-dom';
import CamparisionTable from './CamparisionTable';
import Ccomparison from './Ccomparison';

const Products = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCompare = (product) => {
    if (!selectedProducts.some((p) => p.id === product.id)) {
      setSelectedProducts((prevProducts) => {
        if (prevProducts.length < 2) {
          return [...prevProducts, product];
        } else {
          return [prevProducts[1], product];
        }
      });
    }
  };

  const removeProduct = (productNumber) => {
    setSelectedProducts((prevProducts) =>
      productNumber === 1 ? [prevProducts[1]] : [prevProducts[0]]
    );
  };

  return (
    <div className='bg-gray-200 min-h-screen'>
      {/* Search section */}
      <div className='bg-white py-4 flex flex-col sm:flex-row justify-between items-center px-4'>
        <h4 className='font-bold text-xl mb-4 sm:mb-0'>Products</h4>
        <div className='flex items-center gap-2 w-full sm:w-auto'>
          <input 
            type="text"
            name="search" 
            id="searchField" 
            placeholder='Search Item' 
            className='w-full sm:w-auto text-center border border-black px-4 py-2 rounded-lg focus:outline-none'
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
            Search
          </button>
        </div>
      </div>

      <div className='w-[90%] mx-auto py-6'>
        {/* Grid container for responsive layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {productsData.map((product) => (
            // Card container
            <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col justify-between">
              {/* Image */}
              <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />

              {/* Name and summary */}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">{product.summary}</p>
              </div>

              {/* Price, color, size, brand */}
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Price: {product.price}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Color: {product.color}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Size: {product.size}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  Brand: {product.brand}
                </span>
              </div>

              {/* Row for buttons */}
              <div className="px-6 pt-4 pb-4 flex justify-between items-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                  onClick={() => handleCompare(product)}
                >
                  Compare
                </button>

                <a 
                  href={`/${product.id}.docx`} 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Download Detail
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison section: Show when at least 1 product is selected */}
      {selectedProducts.length > 0 && (
        <Ccomparison
          product1={selectedProducts[0]}
          product2={selectedProducts[1] || {}}  // Pass empty object if no second product is selected
          removeProduct={removeProduct}
        />
      )}
    </div>
  );
};

export default Products;
