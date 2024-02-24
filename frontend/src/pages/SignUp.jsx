import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MyComponent.css'; // Importing styles from MyComponent.css

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('worker'); // Default role is worker

  const handleSignUp = () => {
    // Add signup logic here
    console.log('Signing up...');
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Sign Up</h1>
          <form className="custom-form">
            <div className="form-group second-form-group1">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group second-form-group1">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group second-form-group1">
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
            <div className="form-group second-form-group1">
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
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                className="form-control"
                id="role"
                
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="worker">Worker</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="form-group d-flex justify-content-center mt-3">
              <button
                type="button"
                className="btn btn-primary btn-block custom-login-button" // Applying custom styles
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>

           
          </form>
          <div className="text-center mt-3">
            <span>Already have an account? </span>
            <Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
