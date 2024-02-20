import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ajoutez ici la logique de connexion
    console.log('Logging in...');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-8">Farmtracker</h1>
      <h2 className="text-3xl font-bold text-center mt-8">Welcome Back</h2>
      <form className="mt-8">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Your email 
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          
          
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Your Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <span className="text-gray-700">Don't have an account? </span>
        <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
      </div>
    </div>
  );
}

export default Login;
