import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-8">Welcome to Farm Management System</h1>
      <div className="flex justify-center mt-8">
        <Link to="/login" className="bg-green-500 text-white font-bold py-2 px-4 rounded">Get Started</Link>
      </div>
    </div>
  );
}

export default Home;

