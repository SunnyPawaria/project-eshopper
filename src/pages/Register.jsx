import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";
import { useDispatch } from "react-redux";
import { addUserStart } from "../redux/action/user.action";
import { toastr } from "react-redux-toastr";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

export default function Register() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const initalState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    type: "Customer",
  };
  const [formData, setFormData] = useState(initalState);
  const { name, email, password, confirmPassword } = formData;
  const [error, setError] = useState(false);
  const inputChange = (event) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };
  const submit = async (event) => {
    event.preventDefault();
    if (
      formData.password != null &&
      formData.confirmPassword != null &&
      formData.password !== formData.confirmPassword
    ) {
      setError(true);
      return;
    }

    let user = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );

    formData.uid = user.user.uid;

    delete formData.password;
    delete formData.confirmPassword;

    dispatch(addUserStart(formData));

    console.log(user);
    toastr.success("User Register Successfully");

    setTimeout(() => {
      navigate("/login");
    }, 5000);
  };
  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Register</h3>
          <div className="card-text">
            {error && (
              <div
                className="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                Password does not match
              </div>
            )}
            <form className="form" onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={inputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={inputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={inputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={inputChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block login-btn"
              >
                Sign Up
              </button>

              <div className="sign-in">
                All ready have an account <Link to="/login">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
