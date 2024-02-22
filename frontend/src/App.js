import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login'; // Make sure the path to Login is correct
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/login" element={
          <Login/>
        } />
        
        <Route path="/" element={
          <Home/>
        } />
        
        <Route path="/signup" element={
          <SignUp/>
        } />


      </Routes>
    </Router>
  );
}

export default App;





