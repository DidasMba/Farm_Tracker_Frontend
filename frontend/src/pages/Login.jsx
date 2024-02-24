import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MyComponent.css';

function Login() {
  // State variables for email, password, and admin status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // State for the admin checkbox

  // Function to handle the login action
  const handleLogin = () => {
    // Add login logic here
    console.log('Logging in...');
  };

  // Render the login form
  return (
    <div className="container mt-5">
      {/* Centering the form */}
      <div className="d-flex justify-content-center">
        <div className="col-md-6">
          {/* Title */}
          <h1 className="text-center mb-4">Login</h1>
          {/* Form */}
          <form className="custom-form">
            {/* Email input */}
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* Password input */}
            <div className="form-group second-form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Admin checkbox and label */}
            <div className="form-group form-check d-flex justify-content-center align-items-center mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="isAdmin"
                checked={isAdmin}
                onChange={() => setIsAdmin(!isAdmin)} // Toggle the isAdmin state when the checkbox is changed
              />
              <label className="form-check-label" htmlFor="isAdmin">Login as admin</label>
            </div>
            {/* Login button */}
            <div className="form-group d-flex justify-content-center mt-3">
              <button
                type="button"
                className="btn btn-success btn-block custom-login-button"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
          {/* Signup link */}
          <div className="text-center mt-3">
            <span>Don't have an account? </span>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


