import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCartHelper, updateCartHelper } from "../../helpers/cartHelper";
import { updateCartStart } from "../../redux/action/cart.action";

export default function CartItem({ item }) {
  let {
    cart: { carts },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  let [quantity, setQuantity] = useState(item.quantity);

  const decrement = () => {
    setQuantity(quantity - 1);

    let response = updateCartHelper({ ...carts }, item, quantity - 1);

    dispatch(updateCartStart(response));
  };

  const increment = () => {
    setQuantity(quantity + 1);

    let response = updateCartHelper({ ...carts }, item, quantity + 1);

    dispatch(updateCartStart(response));
  };

  const remove = () => {
    let response = removeCartHelper({ ...carts }, item);

    dispatch(updateCartStart(response));
  };

  return (
    <tr>
      <td className="align-middle">
        <img
          src={item.image}
          alt=""
          style={{
            width: "50px",
          }}
        />
        {item.name}
      </td>
      <td className="align-middle">&#8377; {item.price}</td>
      <td className="align-middle">
        <div
          className="input-group quantity mx-auto"
          style={{
            width: "100px",
          }}
        >
          <div className="input-group-btn">
            <button
              className="btn btn-sm btn-primary btn-minus"
              onClick={decrement}
            >
              <i className="fa fa-minus"></i>
            </button>
          </div>
          <input
            type="text"
            className="form-control form-control-sm bg-secondary text-center"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
          <div className="input-group-btn">
            <button
              className="btn btn-sm btn-primary btn-plus"
              onClick={increment}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </td>
      <td className="align-middle">&#8377; {item.price}</td>
      <td className="align-middle">
        <button className="btn btn-sm btn-primary" onClick={remove}>
          <i className="fa fa-times"></i>
        </button>
      </td>
    </tr>
  );
}
