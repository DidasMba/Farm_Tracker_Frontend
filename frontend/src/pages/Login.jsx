import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MyComponent.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // État pour la case à cocher admin

  const handleLogin = () => {
    // Ajoutez ici la logique de connexion
    console.log('Logging in...');
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Login</h1>
          <form className="custom-form">
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
            {/* Ajout de la case à cocher et de l'étiquette */}
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="isAdmin"
                checked={isAdmin}
                onChange={() => setIsAdmin(!isAdmin)} // Inversion de la valeur de isAdmin lorsqu'on change la case à cocher
              />
              <label className="form-check-label" htmlFor="isAdmin">Login as admin</label>
            </div>

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

