import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Router, Routes } from 'react-router-dom'
import Products from './components/Products'
import Brands from './components/Brands'
import AboutUs from './components/AboutUs'
import ContactUS from './components/ContactUS'
import Footer from './components/Footer'
import Links from './components/Links'
// import CamparisonTable from './components/CamparisionTable'
// import PageError from './components/pageError'




const App = () => {
  return (
    <>
      <Navbar/>
      
      <Routes>
          {/* <Route path='*' element={<PageError/>}/> */}
          <Route path='/' element={ <Home/> }/>
          <Route path='/products' element={ <Products/> }/>
          <Route path='/brands' element={ <Brands/> }/>
          <Route path='/about_us' element={ <AboutUs/> }/>
          <Route path='/contact_us' element={ <ContactUS/> }/>
          {/* <Route path='/productsTable' element={ <CamparisonTable products={Products} /> }/> */}
      </Routes>
      <Links/>
      <Footer/>
    </>
  )
}

export default App