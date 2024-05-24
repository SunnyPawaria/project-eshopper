import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="container-fluid">
            <div className="row border-top px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical"
                        style={{
                            height: "65px",
                            marginTop: "-1px",
                            padding: "0 30px"
                        }} >
                        <h6 className="m-0">Categories</h6>
                        <i className="fa fa-angle-down text-dark"></i>
                    </a>
                    <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical"
                        style={{
                            width: "calc(100% - 30px)",
                            zIndex: "10",
                        }}>
                        <div className="navbar-nav w-100 overflow-hidden"
                            style={{
                                height: "410px",

                            }} >
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></a>
                                <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                    <a href="" className="dropdown-item">Men's Dresses</a>
                                    <a href="" className="dropdown-item">Women's Dresses</a>
                                    <a href="" className="dropdown-item">Baby's Dresses</a>
                                </div>
                            </div>
                            <a href="" className="nav-item nav-link">Shirts</a>
                            <a href="" className="nav-item nav-link">Jeans</a>
                            <a href="" className="nav-item nav-link">Swimwear</a>
                            <a href="" className="nav-item nav-link">Sleepwear</a>
                            <a href="" className="nav-item nav-link">Sportswear</a>
                            <a href="" className="nav-item nav-link">Jumpsuits</a>
                            <a href="" className="nav-item nav-link">Blazers</a>
                            <a href="" className="nav-item nav-link">Jackets</a>
                            <a href="" className="nav-item nav-link">Shoes</a>
                        </div>
                    </nav>
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <Link to="/" className="text-decoration-none d-block d-lg-none">
                            <h1 className="m-0 display-5 font-weight-semi-bold">
                                <span className="text-primary font-weight-bold border px-3 mr-1">E</span>
                                Shopper
                            </h1>
                        </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="category" className="nav-item nav-link">Shop</Link>
                                {/* <a href="detail.html" className="nav-item nav-link">Shop Detail</a> */}
                                {/* <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle active" data-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                                        <a href="checkout.html" className="dropdown-item">Checkout</a>
                                    </div>
                                </div> */}
                                {/* <a href="contact.html" className="nav-item nav-link">Contact</a> */}
                            </div>
                            <div className="navbar-nav ml-auto py-0">

                                {/* <Link to="/admin" className="nav-item nav-link">Dashboard</Link> */}
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle active" data-toggle="dropdown">Sunny</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <Link to="/admin" className="dropdown-item">Profile</Link>
                                        <Link to="/admin/orders" className="dropdown-item">Orders</Link>
                                        <Link to="/admin/products" className="dropdown-item">Product</Link>
                                        <Link to="/admin/category" className="dropdown-item">Category</Link>
                                        <Link to="/admin/users" className="dropdown-item">User</Link>
                                        <button className="dropdown-item">Logout</button>
                                    </div>
                                </div>
                                <Link to="/login" className="nav-item nav-link">Login</Link>
                                <Link to="/register" className="nav-item nav-link">Register</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
