import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Details from '../pages/Details'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CartDetails from '../pages/cart/CartDetails'
import Checkout from '../pages/cart/Checkout'

export default function Router() {
  return (
    <Routes>
        <Route path='checkout' element={<Checkout />} />
        <Route path='/cart' element={<CartDetails/>}/>
        <Route path='/register' element={<Register />}  />
        <Route path='/login' element={<Login />}  />
        <Route path='/details' element={<Details />}  />
        <Route path='/category' element={<Category />}  />
        <Route path="/" element={<Home />} />
    </Routes>
  )
}
