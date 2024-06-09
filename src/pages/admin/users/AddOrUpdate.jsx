import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { auth, storage } from "../../../firebase-config";
import { toastr } from "react-redux-toastr";

import { addUserStart } from "../../../redux/action/user.action";
import { createUserWithEmailAndPassword } from "firebase/auth";

let initialValue = {
  name: '',
  email: '',
  password: '',
  type: 'Customer',
  status: ''
};

export default function AddOrUpdate() {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialValue);

  const {
    name,
    email,
    password,
    type, status
  } = formData;

  const inputChange = (event) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };

  const submit = async (event) => {
    event.preventDefault();

    let user =await createUserWithEmailAndPassword(auth, formData.email,formData.password)
    
    formData.uid=user.user.uid;

    delete formData.password;

    dispatch(addUserStart(formData));
  
   console.log(user);
    toastr.success("User Created Successfully");
    setTimeout(() => {
      navigate('/admin/users')
    }, 5000)
  };

  return (
    <div className="card">
      <div className="card-header bg-primary">
        <h5 className="text-white">
          Add User
          <Link
            to="/admin/users"
            className="btn btn-success"
            style={{
              float: "right",
            }}
          >
            Back
          </Link>
        </h5>
      </div>
      <div
        className="card-body"
        style={{
          height: "auto",
        }}
      >
        <form onSubmit={submit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={inputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={inputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={inputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleCheck1">Status</label>
            <select
              className="form-select form-control"
              name="status"
              defaultValue={status}
              onChange={inputChange}
            >
              <option>Select Status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="type">Type</label>
            <select
              className="form-select form-control"
              name="type"
              defaultValue={type}
              onChange={inputChange}
            >
              <option>Select Type</option>
              <option value="1">Admin</option>
              <option value="0">Customer</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
