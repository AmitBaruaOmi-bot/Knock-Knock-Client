import { useState } from "react"
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import "./Login.css"

export default function Login() {

  const navigate = useNavigate()

  const [userData, setUserData] = useState({ email: "", password: "" })
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:5005/api/login`, { email: userData.email, password: userData.password })
      .then((res)=>{
        console.log(userData.data)
        res.json(userData.data)
        navigate("/homepageafterlogin")
      })
      .catch((err) => {
        alert("**Failed to login. Please try again.**")
        console.log(err)
      })
  }
  const clickEvent = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} >
        <div className="col-md-4">
          <label htmlFor='validationCustom01' className="form-label">Email</label>
          <input type="email" className="form-control" id="validationCustom01" name='email' value={userData.email} onChange={clickEvent} required />
        </div>
        <div className="col-md-4">
          <label htmlFor='validationCustom02' className="form-label">Password</label>
          <input type="password" className="form-control" id="validationCustom02" name='password' value={userData.password} onChange={clickEvent} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/signup" className="m-3 btn btn-primary">New User?</Link>
      </form>
    </div>
  )
}