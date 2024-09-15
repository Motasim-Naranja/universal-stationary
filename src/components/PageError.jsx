import React from 'react';
import { Link } from 'react-router-dom';

const PageError = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-6">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
        Go to Homepage
      </Link>
    </div>
  );
};

export default PageError;
