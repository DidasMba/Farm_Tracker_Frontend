
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('worker'); // Default role is worker

  const handleSignUp = () => {
    // Ajoutez ici la logique d'inscription
    console.log('Signing up...');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Sign Up</h1>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
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
          <div className="form-group col-md-6">
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
        </div>
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
        <div className="form-group">
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </form>
      <div className="text-center mt-3">
        <span>Already have an account? </span>
        <Link to="/login">Sign In</Link>
      </div>
    </div>
  );
}

export default SignUp;
