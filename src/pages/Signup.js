import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        userData
      );
      console.log("Signup successful", res.data);
      navigate("/login");
    } catch (err) {
      console.error("Signup failed", err.response?.data || err.message);
      alert(err.response?.data?.message || "An error occurred during signup.");
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="col-md-4">
          <label htmlFor="location" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={userData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <button className="m-3 btn btn-primary fst-italic" type="submit">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-primary">
            Existing user?
          </Link>
        </div>
      </form>
    </div>
  );
}
