import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const {
    category: { categories },
  } = useSelector((state) => state);
  return (
    <div className="container-fluid">
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{
              height: "65px",
              marginTop: "-1px",
              padding: "0 30px",
            }}
          >
            <h6 className="m-0">Categories</h6>
            <i className="fa fa-angle-down text-dark"></i>
          </a>
          <nav
            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
            id="navbar-vertical"
            style={{
              width: "calc(100% - 30px)",
              zIndex: "10",
            }}
          >
            <div
              className="navbar-nav w-100 overflow-hidden"
              style={{
                height: "410px",
              }}
            >
              {categories.length > 0 &&
                categories.map((category, index) => (
                  <Link to="" className="nav-item nav-link" key={index}>
                    {category.name}
                  </Link>
                ))}
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <Link to="/" className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0 display-5 font-weight-semi-bold">
                <span className="text-primary font-weight-bold border px-3 mr-1">
                  E
                </span>
                Shopper
              </h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <Link to="/category" className="nav-item nav-link">
                  Shop
                </Link>
              </div>
              <div className="navbar-nav ml-auto py-0">
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle active"
                    data-toggle="dropdown"
                  >
                    Sunny
                  </a>
                  <div className="dropdown-menu rounded-0 m-0">
                    <Link to="/admin" className="dropdown-item">
                      Profile
                    </Link>
                    <Link to="/admin/orders" className="dropdown-item">
                      Orders
                    </Link>
                    <Link to="/admin/products" className="dropdown-item">
                      Product
                    </Link>
                    <Link to="/admin/category" className="dropdown-item">
                      Category
                    </Link>
                    <Link to="/admin/users" className="dropdown-item">
                      User
                    </Link>
                    <button className="dropdown-item">Logout</button>
                  </div>
                </div>
                <Link to="/login" className="nav-item nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-item nav-link">
                  Register
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
