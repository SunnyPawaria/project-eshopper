import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

export default function JustArrival() {
  const {
    product: { products },
  } = useSelector((state) => state);
  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Just Arrived</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {products.length > 0 &&
          products.map((prod, index) => (
            <ProductItem product={prod} key={index} />
          ))}
      </div>
    </div>
  );
}
