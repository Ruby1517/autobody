import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from '../home/Home'
import Estimate from '../estimate/Estimate'

export default function RoutePage() {
  return (
    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Home />} />       
            {/* <Route  path="/estimate" element={<Estimate />} />                       */}
        </Routes>
    </BrowserRouter>
    
    
  )
}
