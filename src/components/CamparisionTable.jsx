import React from 'react';

const ComparisonTable = ({ products }) => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Product Comparison</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                  Feature
                </th>
                {products.map((product) => (
                  <th key={product.id} className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                    {product.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">Brand</td>
                {products.map((product) => (
                  <td key={product.id} className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    {product.brand}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">Description</td>
                {products.map((product) => (
                  <td key={product.id} className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    {product.description}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">Size</td>
                {products.map((product) => (
                  <td key={product.id} className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    {product.size}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">Color</td>
                {products.map((product) => (
                  <td key={product.id} className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    {product.color}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">Price</td>
                {products.map((product) => (
                  <td key={product.id} className="px-6 py-4 whitespace-no-wrap border-b border-gray-300">
                    {product.price}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable ;
