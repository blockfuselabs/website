import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Web2 from "./WebTwo"
import Web3 from "./WebThree"

const Bootcamp = () => {
  return (
    <div>
      <Routes> 
      <Route path="web2" element={<Web2 />} />
      <Route path="web3" element={<Web3 />} />
      </Routes>

    </div>
  )
}

export default Bootcamp