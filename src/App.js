import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
