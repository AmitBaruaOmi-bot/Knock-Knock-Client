import { useState } from "react"
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Login() {

  const [userData, setUserData] = useState({ email: "", password: "" })
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(JSON.stringify({ email: userData.email, password: userData.password }))
    axios.post("http://localhost:5005/auth/login", { email: userData.email, password: userData.password })
      .then((response) => {
        console.log(response)
      })
  }
  const clickEvent = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} >
        <div className="col-md-4">
          <label for='validationCustom02' className="form-label">Email</label>
          <input type="email" className="form-control" id="validationCustom03" name='email' value={userData.email} onChange={clickEvent} required />
        </div>
        <div className="col-md-4">
          <label for='validationCustom03' className="form-label">Password</label>
          <input type="password" className="form-control" id="validationCustom04" name='password' value={userData.password} onChange={clickEvent} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/signup" className="m-3 btn btn-primary">New User?</Link>
      </form>
    </div>
  )
}
