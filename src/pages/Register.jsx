import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Login.css"

export default function Register() {
    return (
        <div className="global-container">
            <div className="card login-form">
                <div className="card-body">
                    <h3 className="card-title text-center">Register</h3>
                    <div className="card-text">
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div>
                        <form className='form'>
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" name='name' className="form-control" id="name" />
                            </div>
                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input type="email" name='email' className="form-control" id="email" />
                            </div>
                          
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" name='password' className="form-control" id="password" />
                            </div>
                            <div className="form-group">
                                <label for="confirm_password">Confirm Password</label>
                                <input type="password" name='confirm_password' className="form-control" id="confirm_password" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block login-btn">Sign Up</button>

                            <div className="sign-in">
                                All ready have an account <Link to="/login">Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
