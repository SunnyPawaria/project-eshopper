import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css";
import { toastr } from "react-redux-toastr";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

export default function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const initalState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initalState);
  const { email, password } = formData;
  const inputChange = (event) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };
  const submit = async (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        toastr.success("SignIn Successfully");

        setTimeout(() => {
          navigate("/admin");
        }, 5000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toastr.success(error.message);
      });
  };

  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Login</h3>
          <div className="card-text">
            {/* <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              Incorrect username or password.
            </div> */}
            <form className="form" onSubmit={submit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="email"
                  name="email"
                  value={email}
                  onChange={inputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <a
                  href="#"
                  style={{
                    float: "right",
                    fontSize: "12px",
                  }}
                >
                  Forgot password?
                </a>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="password"
                  name="password"
                  value={password}
                  onChange={inputChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block login-btn"
              >
                Sign in
              </button>

              <div className="sign-up">
                Don't have an account? <Link to="/register">Create One</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
