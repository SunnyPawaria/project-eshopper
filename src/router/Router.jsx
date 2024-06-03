import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Details from '../pages/Details'
import Register from '../pages/Register'
import Login from '../pages/Login'
import CartDetails from '../pages/cart/CartDetails'
import Checkout from '../pages/cart/Checkout'
import Auth from '../pages/admin/Auth'
import Profile from '../pages/admin/Profile'
import Product from '../pages/admin/products/Product'
import AddOrEdit from '../pages/admin/products/AddOrEdit'
import AdminCategory from '../pages/admin/category/Category'
import AddOrUpdate from '../pages/admin/category/AddOrUpdate'
import Order from '../pages/admin/orders/Order'
import View from '../pages/admin/orders/View'
import User from '../pages/admin/users/User'
import UserAddOrUpdate from '../pages/admin/users/AddOrUpdate'



export default function Router() {
  return (
    <Routes>
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<CartDetails />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/category' element={<Category />} />
        <Route path="/" element={<Home />} />

        <Route path='/admin' element={<Auth />}>
            <Route index={true} element={<Profile />} /> 
            
            <Route path="products" element={<Product />} /> 
            <Route path="product/add" element={<AddOrEdit />} /> 
            <Route path="product/edit/:id" element={<AddOrEdit />} /> 

            <Route path="category" element={<AdminCategory />} /> 
            <Route path="category/add" element={<AddOrUpdate />} /> 
            <Route path="category/edit/:id" element={<AddOrUpdate />} /> 

            <Route path="orders" element={<Order />} /> 
            <Route path="orders/:id" element={<View />} /> 

            <Route path="users" element={<User />} /> 
            <Route path="user/add" element={<UserAddOrUpdate />} /> 
            <Route path="user/edit/:id" element={<UserAddOrUpdate />} /> 

        </Route>
    </Routes>
  )
}
