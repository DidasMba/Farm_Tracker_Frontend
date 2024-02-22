import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MyComponent.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ajoutez ici la logique de connexion
    console.log('Logging in...');
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center"> {/* Centrage du formulaire */}
        <div className="col-md-6">
          <h1 className="text-center mb-4">Login</h1>
          <form className="custom-form"> {/* Ajout de la classe personnalisée pour le formulaire */}
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
            <div className="form-group"> {/* Ajout d'une grande espace entre les deux formulaires */}
            <div className="form-group d-flex justify-content-center mt-5"> {/* Utilisez d-flex et justify-content-center pour centrer le bouton */}
              <button
                type="button"
                className="btn btn-success btn-block"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
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
