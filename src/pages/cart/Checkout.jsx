import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { placeOrderStart } from "../../redux/action/order.action";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  address_line_1: "",
  address_line_2: "",
  country: "",
  city: "",
  state: "",
  zipcode: "",
};
export default function Checkout() {
  let {
    cart: { carts },
  } = useSelector((state) => state);

  const dispatch=useDispatch();

  let [formData, setFormData] = useState(initialState);
  let {
    first_name,
    last_name,
    email,
    phone,
    address_line_1,
    address_line_2,
    country,
    city,
    state,
    zipcode,
  } = formData;

  const inputChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const submit=(event)=>{
    event.preventDefault();

    let data ={
        address:formData,
        cart:carts
    }
    dispatch(placeOrderStart(data))
  }
  return (
    <>
      <div className="container-fluid bg-secondary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            minHeight: "300px",
          }}
        >
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Checkout
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Checkout</p>
          </div>
        </div>
      </div>
      <form onSubmit={submit}>
        <div className="container-fluid pt-5">
          <div className="row px-xl-5">
            <div className="col-lg-8">
              <div className="mb-4">
                <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <label htmlFor="fist_name">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="John"
                      name="first_name"
                      id="first_name"
                      value={first_name}
                      onChange={inputChange}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Doe"
                      name="last_name"
                      id="last_name"
                      value={last_name}
                      onChange={inputChange}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="example@email.com"
                      name="email"
                      id="email"
                      value={email}
                      onChange={inputChange}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="phone">Mobile No</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="+123 456 789"
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={inputChange}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="address_line_1">Address Line 1</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="123 Street"
                      name="address_line_1"
                      id="address_line_1"
                      value={address_line_1}
                      onChange={inputChange}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="address_line_2">Address Line 2</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="123 Street"
                      name="address_line_2"
                      id="address_line_2"
                      value={address_line_2}
                      onChange={inputChange}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="country">Country</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Country"
                      name="country"
                      id="country"
                      value={country}
                      onChange={inputChange}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="city">City</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="New York"
                      name="city"
                      id="city"
                      value={city}
                      onChange={inputChange}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="state">State</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="New York"
                      name="state"
                      id="state"
                      value={state}
                      onChange={inputChange}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="zipcode">ZIP Code</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="123"
                      name="zipcode"
                      id="zipcode"
                      value={zipcode}
                      onChange={inputChange}
                    />
                  </div>

                  <div className="col-md-12 form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="shipto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                  <h4 className="font-weight-semi-bold m-0">Order Total</h4>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-3 pt-1">
                    <h6 className="font-weight-medium">Subtotal</h6>
                    <h6 className="font-weight-medium">
                      &#8377;{carts.subTotal}
                    </h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-medium">Tax</h6>
                    <h6 className="font-weight-medium">&#8377;{carts.tax}</h6>
                  </div>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                  <div className="d-flex justify-content-between mt-2">
                    <h5 className="font-weight-bold">Total</h5>
                    <h5 className="font-weight-bold">
                      &#8377;{carts.grandTotal}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="card border-secondary mb-5">
                <div className="card-header bg-secondary border-0">
                  <h4 className="font-weight-semi-bold m-0">Payment</h4>
                </div>
                <div className="card-footer border-secondary bg-transparent">
                  <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
