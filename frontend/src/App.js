import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login'; // Make sure the path to Login is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/" element={
          <Home/>
        } />
      </Routes>
    </Router>
  );
}

export default App;



