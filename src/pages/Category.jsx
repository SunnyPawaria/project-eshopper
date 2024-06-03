import React, { useEffect, useState } from "react";
import ProductItem from "../components/front/product/ProductItem";
import { useSelector } from "react-redux";

export default function Category() {
  const {
    product: { products },
  } = useSelector((state) => state);

  let [filter, setFilter] = useState([]);
  let [filterProducts, setFilterProducts] = useState([]);

  const changeInputValue = (event) => {
    if (!event.target.checked) {
      let filtedArray = filter.filter((value) => value !== event.target.value);
      setFilter([...filtedArray]);
    } else {
      setFilter((prev) => [
        ...prev,
        event.target.checked ? event.target.value : "",
      ]);
    }
  };

  const filterProduct = (event) => {
    if (filter.includes("All")) {
      setFilterProducts([...products]);
    } else {
      if (filter.length > 0) {
        for (const fil of filter) {
          let splitArray = fil.split("-");
          for (const product of products) {
            if (
              product.price >= +splitArray[0] &&
              product.price < +splitArray[1]
            ) {
              setFilterProducts((prev) => [...prev, product]);
            }
          }
        }
      }
    }
  };
  useEffect(() => {
    setFilterProducts([]);
    filterProduct();
  }, [filter.length]);
  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5">
        <div className="col-lg-3 col-md-12">
          <div className="border-bottom mb-4 pb-4">
            <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
            <form>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-all"
                  onChange={changeInputValue}
                  value="All"
                />
                <label className="custom-control-label" for="price-all">
                  All Price
                </label>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-1"
                  onChange={changeInputValue}
                  value="0-100"
                />
                <label className="custom-control-label" for="price-1">
                  $0 - $100
                </label>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-2"
                  onChange={changeInputValue}
                  value="100-200"
                />
                <label className="custom-control-label" for="price-2">
                  $100 - $200
                </label>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-3"
                  onChange={changeInputValue}
                  value="200-300"
                />
                <label className="custom-control-label" for="price-3">
                  $200 - $300
                </label>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-4"
                  onChange={changeInputValue}
                  value="300-400"
                />
                <label className="custom-control-label" for="price-4">
                  $300 - $400
                </label>
              </div>
              <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="price-5"
                  onChange={changeInputValue}
                  value="400-500"
                />
                <label className="custom-control-label" for="price-5">
                  $400 - $500
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-9 col-md-12">
          <div className="row pb-3">
            <div className="col-12 pb-1">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by name"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text bg-transparent text-primary">
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                  </div>
                </form>
                <div className="dropdown ml-4">
                  <button
                    className="btn border dropdown-toggle"
                    type="button"
                    id="triggerId"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort by
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="triggerId"
                  >
                    <a className="dropdown-item" href="#">
                      Latest
                    </a>
                    <a className="dropdown-item" href="#">
                      Popularity
                    </a>
                    <a className="dropdown-item" href="#">
                      Best Rating
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {filterProducts.length > 0 &&
              filterProducts.map((product, index) => (
                <ProductItem product={product} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
