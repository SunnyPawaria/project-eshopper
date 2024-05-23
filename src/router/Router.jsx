import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Details from '../pages/Details'

export default function Router() {
  return (
    <Routes>
        <Route path='/details' element={<Details />}  />
        <Route path='/category' element={<Category />}  />
        <Route path="/" element={<Home />} />
    </Routes>
  )
}
