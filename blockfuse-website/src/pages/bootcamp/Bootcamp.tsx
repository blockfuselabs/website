import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Web2 from "./WebTwo"
import Web3 from "./WebThree"
import AboutBootcamp from './AboutBootcamp';

const Bootcamp = () => {
  return (

  

     

      <div className='flex-grow'>
        <Routes>
        <Route path="/about-bootcamp" element={<AboutBootcamp />} /> 
        <Route path="/web2" element={<Web2 />} />
        <Route path="/web3" element={<Web3 />} />
        </Routes>

      </div>


  )
}

export default Bootcamp