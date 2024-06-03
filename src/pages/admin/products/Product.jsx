import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProductStart, getProductStart } from "../../../redux/action/product.action";

export default function Product() {
  const {
    product: { products },
    category: { categories },
  } = useSelector((state) => state);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductStart());
  }, [products.length]);

  const getCategoryName = (id) => {
    let category = categories.find((value) => value.id === id);
    if (category) {
      return category.name;
    }
    return "";
  };

  return (
    <div className="card">
      <div className="card-header bg-primary ">
        <h5 className="text-white">
          Product
          <Link
            to="/admin/product/add"
            className="btn btn-success"
            style={{
              float: "right",
            }}
          >
            Add Product
          </Link>
        </h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="bg-primary text-white">
              <tr>
                <th>S No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                products.map((product, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <img
                        src={product.image}
                        style={{
                          position: "relative",
                          height: "50px",
                        }}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{getCategoryName(product.category_id)}</td>
                    <td>&#8377; {product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.status == "1" ? "Active" : "Inactive"}</td>
                    <td>
                      <Link
                        className="btn btn-warning mx-2"
                        to={`/admin/product/edit/${product.id}`}
                      >
                        Edit
                      </Link>
                      <button className="btn btn-danger" onClick={()=>dispatch(deleteProductStart(product.id))}>Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
