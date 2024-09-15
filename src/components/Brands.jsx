// import React, { useState } from 'react';
// import brands from '../data/brandsLogo.json';
// import products from '../data/productsData.json';

// const Brands = () => {


//   const [selectedBrand, setSelectedBrand] = useState('');

//   const filteredProducts = products.filter(product => product.brand === selectedBrand);
//   console.log(filteredProducts);



  

  

//   return (
//     <div className="p-6">
//       <div className="flex flex-wrap justify-around">
//         {brands.map(brand => (
//           <div
//             key={brand.name}
//             className="cursor-pointer p-4"
//             onClick={() =>  setSelectedBrand(brand.name)}
//           >
//             <img src={brand.brand} alt={brand.name} className="w-32 h-32 object-contain" />
//             <p className="text-center mt-2">{brand.name}</p>
            
            
            
//           </div>
//         ))}
//       </div>
//       {selectedBrand && (
//         <div className="mt-8">
//           <h2 className="text-xl font-bold mb-4">Products from {selectedBrand}</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProducts.map(product => (
      
//               <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
//         {/* image */}
//         <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />

//         {/* name and summary */}
//         <div className="px-6 py-4">
//           <div className="font-bold text-xl mb-2">{product.name}</div>
//           <p className="text-gray-700 text-base">{product.summary}</p>
//         </div>

//         {/* price , color , size , brand */}
//         <div className="px-6 pt-4 pb-2">
//           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//             Price: {product.price}
//           </span>
//           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//             Color: {product.color}
//           </span>
//           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//             Size: {product.size}
//           </span>
//           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//             Brand: {product.brand}
//           </span>
//         </div>

//         {/* Row for buttons */}
//         <div className="px-6 pt-4 pb-4 flex justify-between items-center">
          

//           <a 
//             href={`../assets/documents/${product.id}.docx`}  // Dynamic file name based on product ID 
//             download 
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Download Details
//           </a>
//         </div>
//       </div>
    
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Brands;









// // import React, { useState } from 'react';
// // import productsData from '../data/productsData.json'; // Adjust path if necessary
// // import { Link } from 'react-router-dom';

// // const Brands = () => {
// //     const [selectedBrand, setSelectedBrand] = useState('Piano'); // Default brand or set as needed

// //     // Filter products based on selected brand
// //     const filteredProducts = productsData.filter(product => product.brand === selectedBrand);

// //     return (
// //         <div className="p-4">
// //             <h1 className="text-2xl font-bold mb-4">Products from {selectedBrand}</h1>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
// //                 {filteredProducts.map(product => (
// //                     <div key={product.id} className="border rounded-lg p-4">
// //                         <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
// //                         <h2 className="text-xl font-semibold">{product.name}</h2>
// //                         <p className="text-gray-700">{product.summary}</p>
// //                         <p className="font-bold text-lg mt-2">{product.price}</p>
// //                         <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline mt-4 block">
// //                             View Details
// //                         </Link>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default Brands;


// responsive

import React, { useState } from 'react';
import brands from '../data/brandsLogo.json';
import products from '../data/productsData.json';

const Brands = () => {
  const [selectedBrand, setSelectedBrand] = useState('');

  const filteredProducts = products.filter(product => product.brand === selectedBrand);

  return (
    <div className="p-6 bg-gray-100">
      {/* Brands Section */}
      <div className="flex flex-wrap justify-around">
        {brands.map(brand => (
          <div
            key={brand.name}
            className="cursor-pointer p-4 transition-transform transform hover:scale-105"
            onClick={() => setSelectedBrand(brand.name)}
          >
            <img src={brand.brand} alt={brand.name} className="w-32 h-32 object-contain mx-auto" />
            <p className="text-center mt-2 text-lg font-semibold">{brand.name}</p>
          </div>
        ))}
      </div>

      {/* Filtered Products Section */}
      {selectedBrand && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Products from {selectedBrand}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />

                <div className="px-6 py-4">
                  <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-700">{product.summary}</p>
                </div>

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
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    Brand: {product.brand}
                  </span>
                </div>

                <div className="px-6 pt-4 pb-4 flex justify-between items-center">
                  <a 
                    href={`../assets/documents/${product.id}.docx`} // Dynamic file name based on product ID
                    download 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Download Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Brands;
