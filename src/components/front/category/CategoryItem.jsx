import React from "react";
import { useSelector } from "react-redux";

export default function CategoryItem({ category }) {
  const {
    product: { products },
  } = useSelector((state) => state);

  let categoryProducts = products.filter(
    (prod) => prod.category_id === category.id
  );

  if (category.status === "1") {
    return (
      <div className="col-lg-4 col-md-6 pb-1">
        <div
          className="cat-item d-flex flex-column border mb-4"
          style={{
            padding: "30px",
          }}
        >
          <p className="text-right">{categoryProducts.length} Products</p>
          <a href="" className="cat-img position-relative overflow-hidden mb-3">
            <img
              className="img-fluid"
              src={category.image}
              alt={category.name}
            />
          </a>
          <h5 className="font-weight-semi-bold m-0">{category.name}</h5>
        </div>
      </div>
    );
  }
}
