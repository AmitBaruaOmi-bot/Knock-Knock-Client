import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Myorders from './pages/Myorders';
import Myprofile from './pages/Myprofile';
import Wallet from './pages//Wallet';
import Promotions from './pages/Promotions';
import Help from './pages/Help';
import Settings from './pages/Settings';
import HomepageAfterLogin from './pages/HomepageAfterLogin';
import Cart from './pages/Cart';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './components/ContextReducer.js';



function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/homepageafterlogin" element={<HomepageAfterLogin />} />
            <Route exact path="/myorders" element={<Myorders />} />
            <Route exact path="/myprofile" element={<Myprofile />} />
            <Route exact path="/wallet" element={<Wallet />} />
            <Route exact path="/promotions" element={<Promotions />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;


/*

import Myprofile from './pages/Myprofile';
import Wallet from './pages//Wallet';
import Promotions from './pages/Promotions';
import Help from './pages/Help';
import Settings from './pages/Settings';

          <Route exact path="/myprofile" element={<Myprofile/>} />
          <Route exact path="/myorders" element={<Myorders/>} />
          <Route exact path="/wallet" element={<Wallet/>} />
          <Route exact path="/promotions" element={<Promotions/>} />
          <Route exact path="/help" element={<Help/>} />
          <Route exact path="/settings" element={<Settings/>} />
          */