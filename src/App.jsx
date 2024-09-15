
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Brands from './components/Brands';
import AboutUs from './components/AboutUs';
import ContactUS from './components/ContactUS';
import Footer from './components/Footer';
import Links from './components/Links';
import PageError from './components/PageError';
// import CamparisonTable from './components/CamparisionTable'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Define all routes */}
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/brands' element={<Brands />} />
          <Route path='/about_us' element={<AboutUs />} />
          <Route path='/contact_us' element={<ContactUS />} />
          <Route path='/*' element={<PageError />} />
        </Routes>
      </main>

      {/* Links and Footer */}
      <Links />
      <Footer />
    </div>
  );
};

export default App;
