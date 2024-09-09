import React from 'react';

const Ccomparison = ({ product1, product2, removeProduct }) => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">Compare Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Product 1 */}
        {product1 && (
          <div className="relative border p-6 bg-white shadow-lg rounded-lg">
            <button
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => removeProduct(1)}
            >
              X
            </button>
            <h3 className="text-lg font-bold mb-4">{product1.name}</h3>
            <img src={product1.image} alt={product1.name} className="w-full h-48 object-cover mb-4" />
            <ul className="text-sm space-y-2">
              <li><strong>Brand:</strong> {product1.brand}</li>
              <li><strong>Description:</strong> {product1.description}</li>
              <li><strong>Size:</strong> {product1.size}</li>
              <li><strong>Color:</strong> {product1.color}</li>
              <li><strong>Price:</strong> {product1.price}</li>
              <li><strong>Weight:</strong> {product1.weight}</li>
              <li><strong>Material:</strong> {product1.material}</li>
              <li><strong>Availability:</strong> {product1.availability}</li>
              <li><strong>Rating:</strong> {product1.rating} ({product1.reviews} reviews)</li>
            </ul>
          </div>
        )}

        {/* Product 2 */}
        {product2 && Object.keys(product2).length > 0 && (
          <div className="relative border p-6 bg-white shadow-lg rounded-lg">
            <button
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => removeProduct(2)}
            >
              X
            </button>
            <h3 className="text-lg font-bold mb-4">{product2.name}</h3>
            <img src={product2.image} alt={product2.name} className="w-full h-48 object-cover mb-4" />
            <ul className="text-sm space-y-2">
              <li><strong>Brand:</strong> {product2.brand}</li>
              <li><strong>Description:</strong> {product2.description}</li>
              <li><strong>Size:</strong> {product2.size}</li>
              <li><strong>Color:</strong> {product2.color}</li>
              <li><strong>Price:</strong> {product2.price}</li>
              <li><strong>Weight:</strong> {product2.weight}</li>
              <li><strong>Material:</strong> {product2.material}</li>
              <li><strong>Availability:</strong> {product2.availability}</li>
              <li><strong>Rating:</strong> {product2.rating} ({product2.reviews} reviews)</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ccomparison;
