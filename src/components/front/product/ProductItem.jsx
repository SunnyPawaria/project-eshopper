import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import cartHelper from "../../../helpers/cartHelper";
import {
  addCartStart,
  updateCartStart,
} from "../../../redux/action/cart.action";

export default function ProductItem({ product }) {
  const {
    cart: { carts },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    let response = cartHelper({ ...carts }, product);
    if (response.isUpdated) {
      dispatch(updateCartStart(response));
    } else {
      dispatch(addCartStart(response));
    }
  };

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img
            className="img-fluid w-100"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3">{product.name}</h6>
          <div className="d-flex justify-content-center">
            <h6>&#8377; {product.price}</h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <Link
            to={`/detail/${product.id}`}
            className="btn btn-sm text-dark p-0"
          >
            <i className="fas fa-eye text-primary mr-1"></i>View Detail
          </Link>
          <button onClick={addToCart} className="btn btn-sm text-dark p-0">
            <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}
