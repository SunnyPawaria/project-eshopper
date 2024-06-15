import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderStart } from "../../../redux/action/order.action";
import { Link } from "react-router-dom";

export default function Order() {
  const {
    order: { orders },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderStart());
  }, [orders.length]);
  return (
    <div className="card">
      <div className="card-header bg-primary ">
        <h5 className="text-white">Order </h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="bg-primary text-white">
              <tr>
                <th>#</th>
                <th>SubTotal</th>
                <th>Tax</th>
                <th>GrandTotal </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 &&
                orders.map((order, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{order.cart.subTotal}</td>
                    <td>{order.cart.tax}</td>
                    <td>{order.cart.grandTotal}</td>
                    <td> 
                      <Link to={`/admin/orders/${order.id}`} className="btn btn-primary">View</Link>
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
