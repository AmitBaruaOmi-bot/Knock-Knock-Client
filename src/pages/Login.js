import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        userData
      );
      console.log("Login successful", res.data);
      localStorage.setItem("userEmail", res.data.email);
      localStorage.setItem("authToken", res.data.authToken); // Save token
      navigate("/homepageafterlogin"); // Navigate to the home or dashboard
    } catch (err) {
      console.error("Login failed", err.response?.data || err.message);
      alert(err.response?.data?.message || "Invalid email or password.");
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/signup" className="m-3 btn btn-primary">New User?</Link>
      </form>
    </div>
  );
}
